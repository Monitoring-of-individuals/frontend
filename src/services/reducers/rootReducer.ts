import { combineReducers } from 'redux';
import getUserCredentialsReducer from './userReducers';

const rootReducer = combineReducers({
  currentUser: getUserCredentialsReducer,
});

export default rootReducer;
