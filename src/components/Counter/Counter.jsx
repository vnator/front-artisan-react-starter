import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCounter } from './redux/actions.js';
import { setCounterOneByOne } from './redux/thunk.js';
import style from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className={style.Counter}>
      <button
        className={style.autoCounter}
        onClick={() => dispatch(setCounterOneByOne())}>
        one by one
      </button>
      <div className={style.counter}>
        <button
          className={style.counterEvent}
          onClick={() => dispatch(setCounter(counter - 1))}>
          -
        </button>
        <strong className={style.counterLabel}>{counter}</strong>
        <button
          className={style.counterEvent}
          onClick={() => dispatch(setCounter(counter + 1))}>
          +
        </button>
      </div>
    </div>
  );
};

export { Counter };
