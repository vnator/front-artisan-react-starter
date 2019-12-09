import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: 'nextRootReducer',
});

export { store };
