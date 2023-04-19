export const ADDINDO = "ADDINDO";
export const GETINDO = "GETINDO";
export const REMOVEINDO = "REMOVEINDO";

let InitialStateIndo = {
  GetIndos: false,
  LoadingIndos: false,
  ErrorIndos: false,
};

const IndonesiaReducer = (state = InitialStateIndo, action) => {
  switch (action.type) {
    case GETINDO:
      return {
        ...state,
        GetIndos: action.payload.data4,
        LoadingIndos: action.payload.loading4,
        ErrorIndos: action.payload.error4,
      };
    default:
      return state;
  }
};
export default IndonesiaReducer;
