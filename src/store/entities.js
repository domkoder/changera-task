import { combineReducers } from 'redux';
import userReducer from './user';
import repositoriesReducer from './repositories';

export default combineReducers({
  user: userReducer,
  repositories: repositoriesReducer,
});
