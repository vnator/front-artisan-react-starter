import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useIntl } from 'react-intl';

import {
  IconFlatDown,
  IconFlatUp,
  IconFlatLeft,
  IconFlatRight,
} from '../../components/Icon';

import style from './UserList.module.css';
import { MAIN_ROUTES } from '../../const/routes';
import { Btn } from '../../components/Btn/Btn';
import { SORT_FIELD } from '../../const/userListParams';
import { USER } from '../../queries/user';

const UserList = () => {
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [params, setParams] = useState({
    skip: 0,
    sortField: SORT_FIELD.NAME,
    limit: 4,
  });

  const { formatMessage } = useIntl();

  const { data } = useQuery(USER.GET_USER_LIST, {
    variables: params,
  });

  function onClickUser(id = 0) {
    history.push(MAIN_ROUTES.USER(id));
  }

  function setNewPage(value) {
    if (value >= 0) {
      setPage(value);
      setParams({
        ...params,
        skip: value * params.limit,
      });
    }
  }

  function orderBy(value) {
    setParams({
      ...params,
      sortField: value,
    });
  }

  return (
    <div className={style.UserList}>
      <h2 className={style.title}>
        {formatMessage({
          id: 'users.title',
        })}
      </h2>

      <ul className={style.list}>
        <li className={style.head}>
          <button
            className={style.iconButton}
            onClick={() => orderBy(SORT_FIELD.NAME)}>
            {formatMessage({
              id: 'users.list.name',
            })}
            {params.sortField === SORT_FIELD.NAME ? (
              <IconFlatDown className={style.icon} />
            ) : (
              <IconFlatUp className={style.icon} />
            )}
          </button>
          <button
            className={style.iconButton}
            onClick={() => orderBy(SORT_FIELD.EMAIL)}>
            {formatMessage({
              id: 'users.list.email',
            })}
            {params.sortField === SORT_FIELD.EMAIL ? (
              <IconFlatDown className={style.icon} />
            ) : (
              <IconFlatUp className={style.icon} />
            )}
          </button>
        </li>

        {data &&
          data.users.map(user => (
            <li key={user.id} className={style.item}>
              <button
                className={style.user}
                onClick={() => onClickUser(user.id)}>
                <strong className={style.cell}>{user.name}</strong>
                <span className={style.cell}>{user.email}</span>
              </button>
            </li>
          ))}

        <li className={style.foot}>
          <button
            onClick={() => setNewPage(page - 1)}
            className={style.iconButton}>
            <IconFlatLeft className={style.icon} />
          </button>
          <strong className={style.page}>{page + 1}</strong>
          <button
            onClick={() => setNewPage(page + 1)}
            className={style.iconButton}>
            <IconFlatRight className={style.icon} />
          </button>
        </li>
      </ul>

      <Btn onClick={() => onClickUser()}>
        {formatMessage({
          id: 'users.newUser',
        })}
      </Btn>
    </div>
  );
};

export { UserList };
