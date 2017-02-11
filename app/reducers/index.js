import { combineReducers } from 'redux';

// Reducers go here
import userData from "./usersReducer";
import weatherData from "./weatherReducer";
import survivorData from "./survivorReducer";

export default combineReducers({
  userData,
  weatherData,
  survivorData
});
