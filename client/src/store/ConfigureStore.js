import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware()],
  });
};

export default store;

// access_token=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
// &scope=
// &token_type=bearer

// const token =
//   'access_token=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&scope=&token_type=bearer';

// let result = token.slice(12, 40);

// console("result": )
