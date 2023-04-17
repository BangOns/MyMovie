export const ADD = "ADD";
export const GET = "GET";
export const REMOVE = "REMOVE";

let InitialState = {
  GetFilm: false,
  LoadingFilm: false,
  ErrorFilm: false,
};

const RecomendedReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        GetFilm: action.payload.data,
        LoadingFilm: action.payload.loading,
        ErrorFilm: action.payload.error,
      };
    default:
      return state;
  }
};
export default RecomendedReducer;
