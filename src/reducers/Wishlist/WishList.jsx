export const ADDWISH = "ADDWISH";
export const REMOVEWISH = "REMOVEWISH";
export const CLEARWISH = "CLEARWISH";

const InitialState = {
  CartFilms: [],
  amount: 0,
};
const CartFilmsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADDWISH:
      return {
        ...state,
        CartFilms: action.payload.favorit,
      };
    case REMOVEWISH:
      return {
        ...state,
        CartFilms: action.payload.favorit,
      };

    default:
      return state;
  }
};
export default CartFilmsReducer;
