import {
  RESTAURANT_LIST_DATA,
  ADD_RESTAURANT,
  EDIT_RESTAURANT,
  ADD_MENU_ITEM,
} from "../constant";

const getUpadtedList = (state, newValue) => {
  let newData = [];
  newValue.key = (state.restaurantList.length + 1).toString();
  newData.push(newValue);
  let finalData = [...state.restaurantList, ...newData];

  return finalData;
};

const editRestaurantData = (state, newValue) => {
  let items = state.restaurantList;
  var foundIndex = items.findIndex((x) => x.key == newValue.key);
  items[foundIndex] = newValue;

  return items;
};
const addMenuItems = (state, newValue) => {
  let items = state.restaurantList;

  let obj = {};
  let objMenu = {};
  let menu = [];
  items.forEach((element) => {
    if (element.key === newValue.key) {
      var foundIndex = element.menu.category.findIndex(
        (x) => x.cuisine == newValue.cuisine
      );
      if (foundIndex === -1) {
        obj = {
          cuisine: newValue.cuisine,
          key: (element.menu.category.length + 1).toString(),
        };
        objMenu = { dish: newValue.dish, price: newValue.price };
        menu.push(objMenu);
        obj.menuItems = menu;
        element.menu.category.push(obj);
      } else {
        var z = element.menu.category[foundIndex].menuItems.findIndex(
          (y) => y.dish == newValue.dish
        );
        if (z === -1) {
          objMenu = {
            key: (
              element.menu.category[foundIndex].menuItems.length + 1
            ).toString(),
            dish: newValue.dish,
            price: newValue.price,
          };
          element.menu.category[foundIndex].menuItems.push(objMenu);
        }
      }
    }
  });

  return items;
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
    case EDIT_RESTAURANT:
      return {
        ...state,
        restaurantList: editRestaurantData(state, action.payload),
      };
    case ADD_MENU_ITEM:
      return {
        ...state,
        restaurantList: addMenuItems(state, action.payload),
      };

    default:
      return state;
  }
}

export { restaurantReducer };
