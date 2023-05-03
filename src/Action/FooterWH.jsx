import { PLACEFOOTER } from "../reducers/footer/Footer";
export const ClientInputWh = (wh) => {
  return (dispatch) => {
    dispatch({
      type: PLACEFOOTER,
      payload: {
        clientwh: wh,
      },
    });
  };
};
