import { RESTAURANT_LIST_DATA } from "../constant";

function restaurantReducer(state = { restaurantList:[]}, action) {
  switch (action.type) {
    case RESTAURANT_LIST_DATA:
      return {
        ...state,
        restaurantList: action.payload,
      };

    default:
      return state;
  }
}

export { restaurantReducer };
