import { toast } from '../redux/types';
import { toastReducer, _initialState } from '../redux/reducer';

describe('Toast Reducer', () => {
  it('default state', () => {
    expect(toastReducer(undefined, {})).toEqual(_initialState);
  });

  it('setMessage', () => {
    const actionCreate = {
      type: toast.SET_MESSAGE,
      payload: 'message',
    };

    expect(toastReducer(actionCreate, {})).toEqual(actionCreate);
  });

  it('toggleActive', () => {
    const actionCreate = {
      type: toast.TOGGLE_ACTIVE,
    };

    expect(toastReducer(actionCreate, {})).toEqual(actionCreate);
  });
});
