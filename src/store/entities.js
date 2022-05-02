import { combineReducers } from 'redux';
import authReducer from './auth';
import repositoriesReducer from './repositories';

export default combineReducers({
  auth: authReducer,
  repositories: repositoriesReducer,
});
