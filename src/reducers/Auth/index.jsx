export const ADD = "ADD";
export const GET = "GET";
export const REMOVE = "REMOVE";

let InitialState = {
  RegisterUser: false,
  GetUser: false,
  RemoveUser: false,
};

const AuthReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        RegisterUser: action.payload.data,
        GetUser: action.payload.getData,
        RemoveUser: action.payload.Removedata,
      };
    case GET:
      return {
        ...state,
        RegisterUser: action.payload.data,
        GetUser: action.payload.getData,
        RemoveUser: action.payload.Removedata,
      };
    case REMOVE:
      return {
        ...state,
        RegisterUser: action.payload.data,
        GetUser: action.payload.getData,
        RemoveUser: action.payload.Removedata,
      };
    default:
      return state;
  }
};
export default AuthReducer;
