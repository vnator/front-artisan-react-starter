import { address } from '../redux/types';
import { addressReducer, _initialState } from '../redux/reducer';

describe('Address Reducer', () => {
  it('default state', () => {
    expect(addressReducer(_initialState, {})).toEqual(_initialState);
  });

  it('setStreet', () => {
    const actionCreate = {
      type: address.SET_STREET,
      payload: {
        value: 'teste',
        index: ['first', 'street'],
      },
    };

    expect(addressReducer(actionCreate, {})).toEqual(actionCreate);
  });

  it('setNumber', () => {
    const actionCreate = {
      type: address.SET_NUMBER,
      payload: {
        value: 1234,
        index: ['first', 'number'],
      },
    };

    expect(addressReducer(actionCreate, {})).toEqual(actionCreate);
  });

  it('setCity', () => {
    const actionCreate = {
      type: address.SET_CITY,
      payload: {
        value: 'teste',
        index: ['first', 'city'],
      },
    };

    expect(addressReducer(actionCreate, {})).toEqual(actionCreate);
  });
});
