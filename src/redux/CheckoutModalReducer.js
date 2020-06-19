import * as ActionTypes from "./ActionTypes";

export const CheckoutModal = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_CHECKOUT: {
      return action.payload;
    }
    case ActionTypes.CLOSE_CHECKOUT: {
      return action.payload;
    }
    default:
      return state;
  }
};
