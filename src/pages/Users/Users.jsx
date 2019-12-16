import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useIntl } from 'react-intl';
import style from './Users.module.css';

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
      <h2>
        {formatMessage({
          id: 'users.title',
        })}
      </h2>

      <ul>
        {data &&
          data.users.map(user => (
            <li key={user.id}>
              <strong>{user.name} :</strong>
              <span>{user.name}</span> - <span>{user.dateOfBirth}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Users };
