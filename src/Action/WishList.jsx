import { ADDWISH } from "../reducers/Wishlist/WishList";

export const AddWishList = (dataFilms) => {
  return (dispatch) => {
    dispatch({
      type: ADDWISH,
      payload: {
        favorit: dataFilms,
      },
    });
  };
};

export const RemoveWishList = (dataFilms) => {
  return (dispatch) => {
    dispatch({
      type: ADDWISH,
      payload: {
        favorit: dataFilms,
      },
    });
  };
};
