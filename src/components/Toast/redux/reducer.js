import { createReducer, createAction } from '@reduxjs/toolkit';
import { assocPath } from 'ramda';
import { toast } from './types';

// DECLARE ACTION CREATOR FOR MATCH WITH ACTION CREATOR DISPATCH
const setMessage = createAction(toast.SET_MESSAGE);
const toggleActive = createAction(toast.TOGGLE_ACTIVE);

// DECLARE INITIAL STATE OF APP REDUCER
const _initialState = Object.freeze({
  active: false,
  message: '',
});

// DECLARE APP REDUCER
const toastReducer = createReducer(_initialState, {
  [toggleActive]: (state, _) => assocPath(['active'], !state.active, state),

  [setMessage]: (state, action) =>
    assocPath(['message'], action.payload, state),
});

export { toastReducer, _initialState };
