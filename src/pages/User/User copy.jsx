import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { ROUTER_PARAMS, MAIN_ROUTES } from '../../const/routes';
import { TextField } from '../../components/TextField/TextField';

import style from './User.module.css';
import { Btn } from '../../components/Btn/Btn';
import { USER } from '../../queries/user';
import { triggerToast } from '../../components/Toast/redux/thunks';
import { checkEmail } from '../../utils/validate';
import { ERROR } from '../../const/errors';

const User = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { formatMessage } = useIntl();

  const client = useApolloClient();

  const { data, loading, error, refetch } = useQuery(USER.GET_USER, {
    variables: {
      id: params[ROUTER_PARAMS.USER_ID],
    },
  });

  const [upsertUser] = useMutation(USER.UPSERT_USER, {
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

  const submit = () => {
    if (checkEmail(form.email)) {
      upsertUser({
        variables: {
          ...form,
        },
      });
    } else {
      dispatch(
        triggerToast(
          formatMessage({
            id: `app.error.${ERROR.TYPE.INPUT}.${ERROR.CODE.A01}`,
          }),
        ),
      );
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
            key={key}
            name={key}
            value={val}
            label={formatMessage({ id: `user.form.${key}.label` })}
            onChange={e => setForm({ ...form, [key]: e.target.value })}
            placeholder={formatMessage({
              id: `user.form.${key}.placeholder`,
            })}
            type={defineType(key)}
            disabled={key === 'gender'}
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
