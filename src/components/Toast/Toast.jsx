import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './Toast.module.css';
import { toggleActive } from './redux/actions';

const Toast = () => {
  const dispatch = useDispatch();
  const { active, message } = useSelector(state => state.toast);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        dispatch(toggleActive());
      }, 3000);
    }
  }, [active, dispatch]);

  return (
    <div className={`${style.Toast} ${active && style._active}`}>{message}</div>
  );
};

export { Toast };
