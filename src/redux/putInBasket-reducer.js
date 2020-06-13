import * as ActionTypes from "./ActionTypes";

export const putInBasket = (state = [], action) => {
  if (state.basket) {
    if (action.type === ActionTypes.PUT_IN_BASKET) {
      const newItem = { ...action.payload, id: state.basket.length };
      console.log("state.basket: " + JSON.stringify(state.basket));

      const newState = { ...state, basket: state.basket.concat(newItem) };
      // console.log(" NEW STATE is " + JSON.stringify(newState));

      return newState;
    }
    return state;
  } else {
    if (action.type === ActionTypes.PUT_IN_BASKET) {
      const newItem = { ...action.payload, id: 0 };
      const newState = [ newItem ];

      console.log(" NEW STATE is " + JSON.stringify(newState));
      return newState;
    }
    return state;
  }
};
