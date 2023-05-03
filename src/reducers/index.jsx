import { combineReducers } from "redux";

import CartFilmsReducer from "./Wishlist/WishList";
import MySearchReducer from "./Search/Search";
export default combineReducers({
  MySearchReducer,
  CartFilmsReducer,
});
