import { createReducer, createAction } from '@reduxjs/toolkit';
import { counter } from './types';

// DECLARE ACTION CREATOR FOR MATCH WITH ACTION CREATOR DISPATCH
const setCounter = createAction(counter.SET_COUNTER);

// DECLARE INITIAL STATE OF APP REDUCER
const initialState = 543;

// DECLARE APP REDUCER
const counterReducer = createReducer(initialState, {
  [setCounter]: (_, action) => {
    return action.payload;
  },
});

export { counterReducer };
