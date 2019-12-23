import { _initialState } from '../redux/reducer';
import { setAddressCity } from '../redux/thunks';
import { spy } from 'sinon';

describe('Address Thunks', () => {
  it('setAddressCity', () => {
    const dispatch = spy();
    const getState = () => ({ address: _initialState });

    setAddressCity('carambolas')(dispatch, getState);

    expect(dispatch.callCount).toBe(Object.keys(_initialState).length);
  });
});
