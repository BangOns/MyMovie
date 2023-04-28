export const GETPOP = "GETPOP";

let InitialStatePop = {
  GetPops: false,
  LoadingPops: false,
  ErrorPops: false,
};

const PopularReducer = (state = InitialStatePop, action) => {
  switch (action.type) {
    case GETPOP:
      return {
        ...state,
        GetPops: action.payload.data3,
        LoadingPops: action.payload.loading3,
        ErrorPops: action.payload.error3,
      };
    default:
      return state;
  }
};
export default PopularReducer;
