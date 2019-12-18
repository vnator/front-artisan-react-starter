import { counterReducer } from '../components/Counter/redux/reducer';
import { addressReducer } from '../pages/Address/redux/reducer';
import { toastReducer } from '../components/Toast/redux/reducer';

const rootReducer = Object.freeze({
  address: addressReducer,
  counter: counterReducer,
  toast: toastReducer,
});

export { rootReducer };
