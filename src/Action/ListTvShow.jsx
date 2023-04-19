import { GETTV } from "../reducers/TvShow/TvShow";

export const GetTV = (thisTv) => {
  return (dispatch) => {
    dispatch({
      type: GETTV,
      payload: {
        data2: false,
        loading2: true,
        error2: false,
      },
    });
    try {
      dispatch({
        type: GETTV,
        payload: {
          data2: thisTv,
          loading2: false,
          error2: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GETTV,
        payload: {
          data2: false,
          loading2: false,
          error2: true,
        },
      });
    }
  };
};
