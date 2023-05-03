export const INPUT = "INPUT";

let InitialState = {
  searchInput: "",
};
const MySearchReducer = (state = InitialState, action) => {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        searchInput: action.payload.input,
      };
    default:
      return state;
  }
};
export default MySearchReducer;
