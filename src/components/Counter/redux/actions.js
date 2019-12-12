import { createAction } from '@reduxjs/toolkit';
import { counter } from './types';

const _setCounter = value => {
  console.log(value);
  return { payload: value };
};

const setCounter = createAction(counter.SET_COUNTER, _setCounter);

export { setCounter };
