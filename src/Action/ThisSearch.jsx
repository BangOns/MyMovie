import { INPUT } from "../reducers/Search/Search";

export const ClientInput = (words) => {
  return (dispatch) => {
    dispatch({
      type: INPUT,
      payload: {
        input: words,
      },
    });
  };
};
