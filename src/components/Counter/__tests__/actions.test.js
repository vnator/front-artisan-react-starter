import { counter } from '../redux/types';
import { setCounter } from '../redux/actions';

describe('Counter Action', () => {
  it('setCounter', () => {
    const payload = 2;
    const actionResult = {
      type: counter.SET_COUNTER,
      payload,
    };

    expect(setCounter(payload)).toEqual(actionResult);
  });
});
