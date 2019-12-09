import { createAction } from '@reduxjs/toolkit';
import { app } from './types';

// DECLARE ACTION CREATOR FOR MATCH WITH REDUCER
const _setCounter = payload => ({ payload, index: 'counter' });

// DECLARE ACTION CREATOR FOR MATCH WITH REDUCER
const _setAddress = ({ payload, index }) => ({
  payload,
  index: `address.${index}`,
});

const setCounter = createAction(app.SET_COUNTER, _setCounter);

const setAddress = createAction(app.SET_ADDRESS, _setAddress);

export { setAddress, setCounter };
