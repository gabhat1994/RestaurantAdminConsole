import { RESTAURANT_LIST_DATA,EDIT_RESTAURANT  , ADD_RESTAURANT , ADD_MENU_ITEM} from "../constant";

const resturantList = (data) => async (dispatch) => {
  dispatch({ type: RESTAURANT_LIST_DATA, payload: data });
};

const addResturant = (data) => async (dispatch) => {
    dispatch({ type: ADD_RESTAURANT, payload: data });
  };

  const editResturant = (data) => async (dispatch) => {
    dispatch({ type: EDIT_RESTAURANT, payload: data });
  };


  const addMenuItem = (data) => async (dispatch) => {
    dispatch({ type: ADD_MENU_ITEM, payload: data });
  };

export { resturantList , addResturant , editResturant , addMenuItem};
