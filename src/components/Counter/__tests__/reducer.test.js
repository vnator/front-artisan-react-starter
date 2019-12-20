import { counterReducer, _initialState } from '../redux/reducer';
import { counter } from '../redux/types';

describe('Counter Reducer', () => {
  it('default state', () => {
    expect(counterReducer(undefined, {})).toEqual(_initialState);
  });

  it('setCounter', () => {
    const actionCreate = {
      type: counter.SET_COUNTER,
      payload: 1234,
    };

    expect(counterReducer(actionCreate, {})).toEqual(actionCreate);
  });
});
