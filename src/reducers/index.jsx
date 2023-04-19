import { combineReducers } from "redux";
import AuthReducer from "./Auth/index";
import RecomendedReducer from "./Recomended/Recomended";
import TvShowReducer from "./TvShow/TvShow";
import PopularReducer from "./Popular/Popular";
import IndonesiaReducer from "./Indonesia/Indonesia";
export default combineReducers({
  AuthReducer,
  RecomendedReducer,
  TvShowReducer,
  PopularReducer,
  IndonesiaReducer,
});
