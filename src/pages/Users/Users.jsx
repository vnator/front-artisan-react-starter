import React from 'react';
import gql from 'graphql-tag';
import { useIntl } from 'react-intl';
import { useQuery } from 'urql';
import style from './Users.module.css';

const query = gql`
  {
    user(id: 1) {
      name
      email
    }
  }
`;

const Users = () => {
  const { formatMessage } = useIntl();
  const [result] = useQuery({ query });
  return (
    <div className={style.Users}>
      <h2>
        {formatMessage({
          id: 'users.title',
        })}
      </h2>
    </div>
  );
};

export { Users };
