export const GET = "GET";

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
