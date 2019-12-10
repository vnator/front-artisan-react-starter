import { createAction } from '@reduxjs/toolkit';
import { app } from './types';

// DECLARE ACTION CREATOR FOR MATCH WITH REDUCER
const _setCounter =
  value => ({ 
    payload: {
      index: ['counter'], value
    }});

// DECLARE ACTION CREATOR FOR MATCH WITH REDUCER
const _setAddress =
  ({ value, index }) => ({
    payload: {
      index: ['address',index],
      value, 
    }});

const setCounter = createAction(app.SET_COUNTER, _setCounter);

const setAddress = createAction(app.SET_ADDRESS, _setAddress);

export { setAddress, setCounter };
