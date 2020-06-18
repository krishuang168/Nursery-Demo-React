import * as ActionTypes from "./ActionTypes";

export const ReduxBasket = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_BASKET: {
      const newState = action.payload;

      return newState;
    }
    case ActionTypes.PUT_IN_BASKET: {
      // Checking...
      if (!state) {
        state = new Array(0);
      }
      const itemExisting = state.filter(
        (item) => item.index === action.payload.index
      )[0];
      // End of checking

      if (itemExisting) {
        alert("This item is in your shopping basket already!");
      } else {
        const newItem = {
          ...action.payload,
          id: state.length,
          quantity: 1,
        };

        const newState = state.concat(newItem);

        return newState;
      }
    }
    default:
      return state;
  }
};
