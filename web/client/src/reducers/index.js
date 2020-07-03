import { combineReducers } from 'redux';
import authReducer from './authReducer';
import navbarReducer from './navbarReducer';
import zoneReducer from './zoneReducer';

export default combineReducers({
  auth: authReducer,
  navbar: navbarReducer,
  zone: zoneReducer
});
