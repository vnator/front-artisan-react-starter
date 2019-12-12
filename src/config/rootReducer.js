import { counterReducer } from '../components/Counter/redux/reducer';
import { addressReducer } from '../pages/Address/redux/reducer';

const rootReducer = Object.freeze({
  address: addressReducer,
  counter: counterReducer,
});

export { rootReducer };
