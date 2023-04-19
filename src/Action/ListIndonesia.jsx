import { GETINDO } from "../reducers/Indonesia/Indonesia";
export const GetIndonesia = (thisFilm4) => {
  return (dispatch) => {
    dispatch({
      type: GETINDO,
      payload: {
        data4: false,
        loading4: true,
        error4: false,
      },
    });
    try {
      dispatch({
        type: GETINDO,
        payload: {
          data4: thisFilm4,
          loading4: false,
          error4: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GETINDO,
        payload: {
          data4: false,
          loading4: false,
          error4: true,
        },
      });
    }
  };
};
