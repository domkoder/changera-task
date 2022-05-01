import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware()],
  });
};

export default store;
