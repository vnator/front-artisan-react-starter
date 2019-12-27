import { toast } from '../redux/types';
import { setMessage, toggleActive } from '../redux/actions';

describe('Toast Action', () => {
  it('setMessage', () => {
    const payload = 'any message';
    const action = setMessage(payload);

    expect(action).toEqual({ type: toast.SET_MESSAGE, payload });
  });

  it('toggleActive', () => {
    const action = toggleActive();

    expect(action).toEqual({ type: toast.TOGGLE_ACTIVE });
  });
});
