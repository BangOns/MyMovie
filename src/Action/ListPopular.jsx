import { GETPOP } from "../reducers/Popular/Popular";

export const GetPopular = (thisFilm3) => {
  return (dispatch) => {
    dispatch({
      type: GETPOP,
      payload: {
        data3: false,
        loading3: true,
        error3: false,
      },
    });
    try {
      dispatch({
        type: GETPOP,
        payload: {
          data3: thisFilm3,
          loading3: false,
          error3: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GETPOP,
        payload: {
          data3: false,
          loading3: false,
          error3: true,
        },
      });
    }
  };
};
