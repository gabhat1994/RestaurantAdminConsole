import { RESTAURANT_LIST_DATA, ADD_RESTAURANT } from "../constant";

const getUpadtedList = (state, newValue) => {
  let newData = [];
  newValue.key = (state.restaurantList.length + 1).toString();
  newData.push(newValue);
  let finalData = [...state.restaurantList, ...newData];

  return finalData;
};

function restaurantReducer(state = { restaurantList: [] }, action) {
  switch (action.type) {
    case RESTAURANT_LIST_DATA:
      return {
        ...state,
        restaurantList: action.payload,
      };
    case ADD_RESTAURANT:
      return {
        ...state,
        restaurantList: getUpadtedList(state, action.payload),
      };

    default:
      return state;
  }
}

export { restaurantReducer };
