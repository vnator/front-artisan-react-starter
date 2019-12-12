import { createReducer, createAction } from '@reduxjs/toolkit';
import { assocPath } from 'ramda';
import { address } from './types';

const setStreet = createAction(address.SET_STREET);
const setCity = createAction(address.SET_CITY);
const setNumber = createAction(address.SET_NUMBER);

const initialState = Object.freeze({
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
});

const addressReducer = createReducer(initialState, {
  [setCity]: (state, action) => {
    const { index, value } = action.payload;
    return assocPath(index, value, state);
  },

  [setStreet]: (state, action) => {
    const { index, value } = action.payload;
    return assocPath(index, value, state);
  },

  [setNumber]: (state, action) => {
    const { index, value } = action.payload;
    return assocPath(index, value, state);
  },
});

export { addressReducer };
