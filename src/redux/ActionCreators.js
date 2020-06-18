import * as ActionTypes from "./ActionTypes";
import { fullPlantList } from "../shared/data/fullPlantList";

// Function: Update Redux state from the data of local state in the shopping basket
export const updateBasket = (basket) => ({
  type: ActionTypes.UPDATE_BASKET,
  payload: basket,
});
// Currently called: ShoppingBasket.js

// Function: Generate the selected item from the passed-in selected index
export const putInBasket = (index) => {
  const selectedItem = fullPlantList.filter((item) => item.index === index)[0];

  return {
    type: ActionTypes.PUT_IN_BASKET,
    payload: selectedItem,
  };
};
// Currently called: Card.js
