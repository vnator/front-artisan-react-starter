import React from 'react';
import Type from 'prop-types';

import style from './Btn.module.css';

const Btn = props => (
  <button onClick={props.onClick} className={style.Btn}>
    {props.children}
  </button>
);

Btn.propTypes = {
  children: Type.string.isRequired,
  onClick: Type.func.isRequired,
};

export { Btn };
