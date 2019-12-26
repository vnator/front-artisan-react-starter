import React from 'react';
import Type from 'prop-types';

import style from './TextField.module.css';

const TextField = props => (
  <div className={style.TextField}>
    <label className={style.label}>{props.label}</label>
    <input className={style.input} {...props} />
  </div>
);

TextField.defaultProps = {
  value: '',
  placeholder: '',
  onBlur: undefined,
  onFocus: undefined,
  type: 'text',
  disabled: false,
};

TextField.propTypes = {
  name: Type.string.isRequired,
  label: Type.string.isRequired,
  placeholder: Type.string,
  value: Type.string,
  onChange: Type.func.isRequired,
  onBlur: Type.func,
  onFocus: Type.func,
  type: Type.string,
  disabled: Type.bool,
};

export { TextField };
