export const GETTV = "GETTV";

let InitialStateTv = {
  GetTvs: false,
  LoadingTv: false,
  ErrorTv: false,
};

const TvShowReducer = (state = InitialStateTv, action) => {
  switch (action.type) {
    case GETTV:
      return {
        ...state,
        GetTvs: action.payload.data2,
        LoadingTv: action.payload.loading2,
        ErrorTv: action.payload.error2,
      };
    default:
      return state;
  }
};
export default TvShowReducer;
