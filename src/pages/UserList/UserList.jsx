import React from 'react';
import { gql } from 'apollo-boost';

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

const query = gql`
  {
    users {
      id
      name
      email
      dateOfBirth
    }
  }
`;

const UserList = () => {
  const history = useHistory();
  const { formatMessage } = useIntl();
  const { data } = useQuery(query);

  function onClickUser(id = 0) {
    history.push(MAIN_ROUTES.USER(id));
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
          <button className={style.iconButton}>
            {formatMessage({
              id: 'users.list.name',
            })}
            <IconFlatDown className={style.icon} />
          </button>
          <button className={style.iconButton}>
            {formatMessage({
              id: 'users.list.email',
            })}
            <IconFlatUp className={style.icon} />
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
          <button className={style.iconButton}>
            <IconFlatLeft className={style.icon} />
          </button>
          <strong className={style.page}>1</strong>
          <button className={style.iconButton}>
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
