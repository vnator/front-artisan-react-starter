import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';

import { ROUTER_PARAMS } from '../../const/routes';
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

const User = () => {
  const params = useParams();
  const { formatMessage } = useIntl();

  const { data, loading, error } = useQuery(query, {
    variables: {
      id: params[ROUTER_PARAMS.USER_ID],
    },
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    gender: '',
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

        <Btn onClick={() => console.log('foi')}>
          {formatMessage({
            id: 'user.submit',
          })}
        </Btn>
      </form>
    </div>
  );
};

export { User };
