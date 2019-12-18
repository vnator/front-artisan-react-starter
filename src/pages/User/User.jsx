import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { ROUTER_PARAMS, MAIN_ROUTES } from '../../const/routes';
import { TextField } from '../../components/TextField/TextField';

import style from './User.module.css';
import { Btn } from '../../components/Btn/Btn';

const query = gql`
  query User($id: ID) {
    user(id: $id) {
      id
      name
      email
      dateOfBirth
      gender
    }
  }
`;

const mutation = gql`
  mutation UpsertUser(
    $name: String
    $email: Email
    $dateOfBirth: Date
    $gender: Gender
  ) {
    upsertUser(
      name: $name
      email: $email
      dateOfBirth: $dateOfBirth
      gender: $gender
    ) {
      id
    }
  }
`;

const User = () => {
  const params = useParams();
  const history = useHistory();
  const { formatMessage } = useIntl();

  const client = useApolloClient();

  const { data, loading, error, refetch } = useQuery(query, {
    variables: {
      id: params[ROUTER_PARAMS.USER_ID],
    },
  });

  const [upsertUser] = useMutation(mutation, {
    onCompleted({ upsertUser }) {
      if (upsertUser.id !== params[ROUTER_PARAMS.USER_ID]) {
        history.push(MAIN_ROUTES.USER(upsertUser.id));
      } else {
        client.writeData({ data: { User: { ...upsertUser } } });
        refetch();
      }
    },
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    gender: 'MALE',
  });

  useEffect(() => {
    if (data && data.user) {
      const { name, email, dateOfBirth, gender } = data.user;

      setForm({
        name,
        email,
        dateOfBirth,
        gender,
      });
    }
  }, [data, loading, error]);

  const defineType = name => {
    if (name === 'dateOfBirth') {
      return 'date';
    } else if (name === 'email') {
      return 'email';
    }
  };

  const submit = () =>
    upsertUser({
      variables: {
        ...form,
      },
    });

  return (
    <div className={style.User}>
      <h2 className={style.title}>
        {formatMessage({
          id: 'user.title',
        })}
      </h2>

      <form className={style.form}>
        {Object.entries(form).map(([key, val]) => (
          <TextField
            placeholder={formatMessage({
              id: `user.form.${key}.placeholder`,
            })}
            label={formatMessage({ id: `user.form.${key}.label` })}
            name={key}
            key={key}
            value={val}
            type={defineType(key)}
            disabled={key === 'gender'}
            onChange={e => setForm({ ...form, [key]: e.target.value })}
          />
        ))}

        <Btn onClick={submit}>
          {formatMessage({
            id: 'user.submit',
          })}
        </Btn>
      </form>
    </div>
  );
};

export { User };
