import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCounter } from './redux/actions.js';
import { setCounterOneByOne } from './redux/thunks.js';
import style from './Counter.module.css';
import { el } from './element.selectors';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className={style.Counter}>
      <button
        className={`${style.autoCounter} ${el.oneByOne}`}
        onClick={() => dispatch(setCounterOneByOne())}>
        one by one
      </button>
      <div className={style.counter}>
        <button
          className={`${style.counterEvent} ${el.minus}`}
          onClick={() => dispatch(setCounter(counter - 1))}>
          -
        </button>
        <strong className={style.counterLabel}>{counter}</strong>
        <button
          className={`${style.counterEvent} ${el.plus}`}
          onClick={() => dispatch(setCounter(counter + 1))}>
          +
        </button>
      </div>
    </div>
  );
};

export { Counter };
