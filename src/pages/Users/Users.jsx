import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useIntl } from 'react-intl';
import style from './Users.module.css';
import { IconFlatDown, IconFlatUp, IconFlatLeft, IconFlatRight } from '../../components/Icon';

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
  const { formatMessage } = useIntl();
  const { data } = useQuery(query);

  console.log(data);
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
            name
            <IconFlatDown className={style.icon} />
          </button>
          <button className={style.iconButton}>
            email
            <IconFlatUp className={style.icon} />
          </button>
        </li>

        {data &&
          data.users.map(user => (
            <li key={user.id} className={style.item}>
              <a className={style.link}>
                <strong className={style.cell}>{user.name}</strong>
                <span className={style.cell}>{user.email}</span>
              </a>
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
