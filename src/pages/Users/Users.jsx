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

import style from './Users.module.css';
import { MAIN_ROUTES } from '../../const/routes';

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

const Users = () => {
  const history = useHistory();
  const { formatMessage } = useIntl();
  const { data } = useQuery(query);

  const onClickUser = id => {
    history.push(MAIN_ROUTES.USER(id));
  };

  return (
    <div className={style.Users}>
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
    </div>
  );
};

export { Users };
