import { RESTAURANT_LIST_DATA } from "../constant";

const resturantList = (data) => async (dispatch) => {
  dispatch({ type: RESTAURANT_LIST_DATA, payload: data });
};

export { resturantList };
