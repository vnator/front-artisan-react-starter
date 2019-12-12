import { createAction } from '@reduxjs/toolkit';
import { address } from './types';

const _setCity = ({ value, index }) => {
  console.log(value);
  console.log(index);

  return {
    payload: {
      index: [index, 'city'],
      value,
    },
  };
};

const _setStreet = ({ value, index }) => {
  console.log(value);
  console.log(index);

  return {
    payload: {
      index: [index, 'street'],
      value,
    },
  };
};

const _setNumber = ({ value, index }) => ({
  payload: {
    index: [index, 'number'],
    value,
  },
});

const setStreet = createAction(address.SET_STREET, _setStreet);
const setCity = createAction(address.SET_CITY, _setCity);
const setNumber = createAction(address.SET_NUMBER, _setNumber);

export { setStreet, setCity, setNumber };
