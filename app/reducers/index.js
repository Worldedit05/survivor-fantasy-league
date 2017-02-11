import { combineReducers } from 'redux';

// Reducers go here
import userData from "./usersReducer";
import weatherData from "./weatherReducer";

export default combineReducers({
  userData,
  weatherData,
});
