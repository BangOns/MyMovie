import { useQuery } from "react-query";
import { GET } from "../reducers/Recomended/Recomended";
import axios from "axios";

export const GetFilms = (Films) => {
  return (dispatch) => {
    dispatch({
      type: GET,
      payload: {
        data: false,
        loading: true,
        error: false,
      },
    });
    try {
      dispatch({
        type: GET,
        payload: {
          data: Films,
          loading: false,
          error: false,
        },
      });
    } catch (error) {
      dispatch({
        type: GET,
        payload: {
          data: false,
          loading: false,
          error: true,
        },
      });
    }
  };
};
