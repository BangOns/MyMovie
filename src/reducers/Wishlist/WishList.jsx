export const ADDWISH = "ADDWISH";
export const REMOVEWISH = "REMOVEWISH";
export const CLEARWISH = "CLEARWISH";

const InitialState = {
  CartFilms: [],
  amount: 0,
};
const CartFilms = (state = InitialState, action) => {
  switch (action.type) {
    case ADDWISH:
      return {
        ...state,
        CartFilms: action.payload.films1,
        amount: action.payload.amount,
      };

    default:
      return state;
  }
};
export default CartFilms;
