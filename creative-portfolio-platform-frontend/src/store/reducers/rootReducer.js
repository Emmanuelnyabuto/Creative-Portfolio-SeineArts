import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import notificationReducer from './notificationReducer';
import userReducer from './userReducer';
import artistReducer from './artistReducer';
import paymentReducer from './paymentReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  notification: notificationReducer,
  user: userReducer,
  artist: artistReducer,
  payment: paymentReducer,
});

export default rootReducer;