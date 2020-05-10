import { setMessage, toggleActive } from './actions';

const triggerToast = (message) => (dispatch) => {
  dispatch(setMessage(message));
  dispatch(toggleActive());
};

export { triggerToast };
