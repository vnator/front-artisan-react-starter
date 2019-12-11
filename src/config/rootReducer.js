import { appReducer } from '../modules/App/redux/reducer';

const rootReducer = Object.freeze({
  app: appReducer,
});

export { rootReducer };
