import React from 'react';
import Type from 'prop-types';

import style from './Btn.module.css';

const Btn = props => (
  <div onClick={props.onClick} className={style.Btn}>
    {props.children}
  </div>
);

Btn.propTypes = {
  children: Type.string.isRequired,
  onClick: Type.func.isRequired,
};

export { Btn };
