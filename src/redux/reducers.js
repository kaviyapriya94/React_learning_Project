import searchReducer from "./AgeCalculator/reducer";
import authReducer from "./authRoutes/authReducer";
import { combineReducers } from "redux";

export default combineReducers({
  searchReducer,
  authReducer
})