import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import style from './Users.module.css';
import { ROUTER_PARAMS } from '../../const/routes';
import { parseRouterId } from '../../utils/parseRouterParams';

const query = gql`
  query User($id: ID) {
    user(id: $id) {
      id
      name
      email
      dateOfBirth
    }
  }
`;

const User = () => {
  const params = useParams();
  const userId = parseRouterId(params[ROUTER_PARAMS.USER_ID]);

  const { formatMessage } = useIntl();
  const { data } = useQuery(query, {
    variables: {
      id: userId,
    },
  });

  return (
    <div className={style.Users}>
      <h2 className={style.title}>
        {formatMessage({
          id: 'user.title',
        })}
      </h2>

      <div>{!data ? 'carregando...' : data.user.name}</div>
    </div>
  );
};

export { User };
