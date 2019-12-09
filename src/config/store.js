import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { appReducer } from '../modules/App/redux/reducer';

const store = configureStore({
  reducer: Object.freeze({
    app: appReducer,
  }),
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
