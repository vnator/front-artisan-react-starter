import { createReducer, createAction } from '@reduxjs/toolkit';
import { assocPath } from 'ramda';
import { app } from './types';

// DECLARE ACTION CREATOR FOR MATCH WITH ACTION CREATOR DISPATCH
const setCounter = createAction(app.SET_COUNTER);
const setAddress = createAction(app.SET_ADDRESS);

// DECLARE INITIAL STATE OF APP REDUCER
const initialState = Object.freeze({
  counter: 543,
  address: {
    first: {
      city: 'Curitiba',
      street: 'Rua dos Boticarios',
      number: '12',
    },
    second: {
      city: 'Ponta Grossa',
      street: 'Marcondes',
      number: '54',
    },
    third: {
      city: 'Laranjal',
      street: 'Maria Ap. Serodio',
      number: '32',
    },
    fourty: {
      city: 'Curitiba',
      street: 'Barao do Rio Branco',
      number: '1232',
    },
  },
});

// DECLARE APP REDUCER
const appReducer = createReducer(initialState, {
  [setCounter]: (state, action) => {
    const { index, value  } = action.payload;
    return assocPath(index, value, state);
  },

  [setAddress]: (state, action) => {
    const { index, value  } = action.payload;
    return assocPath(index, value, state);
  },
});

export { appReducer };
