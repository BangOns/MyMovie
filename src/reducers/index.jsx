import { combineReducers } from "redux";
import AuthReducer from "./Auth/index";
import RecomendedReducer from "./Recomended/Recomended";
export default combineReducers({
  AuthReducer,
  RecomendedReducer,
});
