import { RESTAURANT_LIST_DATA  , ADD_RESTAURANT} from "../constant";

const resturantList = (data) => async (dispatch) => {
  dispatch({ type: RESTAURANT_LIST_DATA, payload: data });
};

const addResturant = (data) => async (dispatch) => {
    dispatch({ type: ADD_RESTAURANT, payload: data });
  };

export { resturantList , addResturant};
