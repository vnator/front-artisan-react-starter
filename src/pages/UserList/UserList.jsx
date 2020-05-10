import React from 'react';

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
import { usePagination } from './usePagination';

const UserList = () => {
  const history = useHistory();
  const [pag, { nextPage, prevPage, orderBy }] = usePagination(SORT_FIELD.NAME);

  const { formatMessage } = useIntl();

  const { data } = useQuery(USER.GET_USER_LIST, {
    variables: pag.params,
  });

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
            {pag.params.sortField === SORT_FIELD.NAME ? (
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
            {pag.params.sortField === SORT_FIELD.EMAIL ? (
              <IconFlatDown className={style.icon} />
            ) : (
              <IconFlatUp className={style.icon} />
            )}
          </button>
        </li>

        {data &&
          data.users.map((user) => (
            <li key={user.id} className={style.item}>
              <button
                className={style.user}
                onClick={() => history.push(MAIN_ROUTES.USER(user.id))}>
                <strong className={style.cell}>{user.name}</strong>
                <span className={style.cell}>{user.email}</span>
              </button>
            </li>
          ))}

        <li className={style.foot}>
          <button onClick={prevPage} className={style.iconButton}>
            <IconFlatLeft className={style.icon} />
          </button>
          <strong className={style.page}>{pag.page}</strong>
          <button onClick={nextPage} className={style.iconButton}>
            <IconFlatRight className={style.icon} />
          </button>
        </li>
      </ul>

      <Btn
        class="carambolas-quadradas"
        onClick={() => history.push(MAIN_ROUTES.USER(0))}>
        {formatMessage({
          id: 'users.newUser',
        })}
      </Btn>
    </div>
  );
};

export { UserList };
