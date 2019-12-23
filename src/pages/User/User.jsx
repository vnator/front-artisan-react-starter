import React, { Component } from 'react';
import Type from 'prop-types';

import { TextField } from '../../components/TextField/TextField';

import style from './User.module.css';
import { Btn } from '../../components/Btn/Btn';
import { checkEmail } from '../../utils/validate';
import { ERROR } from '../../const/errors';
import { intlShape } from '../../utils/intlShape';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this._updateUser(props.data.user),
    };
  }

  _updateUser = user =>
    user
      ? {
          name: user.name,
          email: user.email,
          dateOfBirth: user.dateOfBirth,
          gender: user.gender,
        }
      : {
          name: '',
          email: '',
          dateOfBirth: '',
          gender: 'MALE',
        };

  componentDidUpdate(prevProps) {
    if (!prevProps.data.user && this.props.data.user) {
      this.setState(this._updateUser(this.props.data.user));
    }
  }

  onChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  defineType = name => {
    if (name === 'dateOfBirth') {
      return 'date';
    } else if (name === 'email') {
      return 'email';
    }
  };

  submit = e => {
    e.preventDefault();

    if (checkEmail(this.state.email)) {
      this.props
        .mutate({
          variables: {
            ...this.state,
          },
        })
        .then(() => {
          this.props.data.refetch();
        });
    } else {
      this.props.triggerToast(
        this.props.intl.formatMessage({
          id: `app.error.${ERROR.TYPE.INPUT}.${ERROR.CODE.A01}`,
        }),
      );
    }
  };

  render() {
    const { formatMessage } = this.props.intl;

    return this.props.data.loading ? (
      'carregando'
    ) : (
      <div className={style.User}>
        <h2 className={style.title}>
          {formatMessage({
            id: 'user.title',
          })}
        </h2>
        <form className={style.form}>
          {Object.entries(this.state).map(([key, val]) => (
            <TextField
              key={key}
              name={key}
              value={val}
              label={formatMessage({ id: `user.form.${key}.label` })}
              onChange={this.onChange}
              placeholder={formatMessage({
                id: `user.form.${key}.placeholder`,
              })}
              type={this.defineType(key)}
              disabled={key === 'gender'}
            />
          ))}

          <Btn onClick={this.submit}>
            {formatMessage({
              id: 'user.submit',
            })}
          </Btn>
        </form>
      </div>
    );
  }
}

User.propTypes = {
  mutate: Type.func.isRequired,
  triggerToast: Type.func.isRequired,
  intl: Type.shape(intlShape).isRequired,
  data: Type.shape({
    loading: Type.bool,
    user: Type.objectOf(Type.string),
    error: Type.string,
  }).isRequired,
};

export { User };
