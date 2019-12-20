import { spy } from 'sinon';
import { triggerToast } from '../redux/thunks';

describe('Toast Thunks', () => {
  it('triggerToast', () => {
    const dispatch = spy();
    const getState = () => ({ message: '', active: true });

    triggerToast()(dispatch, getState);

    expect(dispatch.calledTwice).toBeTruthy();
  });
});
