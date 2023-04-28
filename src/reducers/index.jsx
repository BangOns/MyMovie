import { combineReducers } from "redux";
import RecomendedReducer from "./Recomended/Recomended";
import TvShowReducer from "./TvShow/TvShow";
import PopularReducer from "./Popular/Popular";
import IndonesiaReducer from "./Indonesia/Indonesia";
import CartFilms from "./Wishlist/WishList";
export default combineReducers({
  RecomendedReducer,
  TvShowReducer,
  PopularReducer,
  IndonesiaReducer,
  CartFilms,
});
