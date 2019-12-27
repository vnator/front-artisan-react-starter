import { spy } from 'sinon';
import { setCounterOneByOne } from '../redux/thunks';
import { counter } from '../redux/types';

describe('Counter Thunks', () => {
  it('setCounterOneByOne', () => {
    const payload = 1;
    const dispatch = spy();
    const getState = () => ({ counter: payload });

    setCounterOneByOne()(dispatch, getState);

    expect(
      dispatch.calledWith({
        type: counter.SET_COUNTER,
        payload: payload + 1,
      }),
    ).toBeTruthy();
  });

  it('setCounterOneByOne inverted', () => {
    const payload = 1;
    const dispatch = spy();
    const getState = () => ({ counter: payload });

    setCounterOneByOne()(dispatch, getState);

    expect(dispatch.calledWith(undefined)).toBeFalsy();
  });
});
