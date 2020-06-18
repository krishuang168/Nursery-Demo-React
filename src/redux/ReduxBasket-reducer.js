import { initialBasket } from "../shared/data/InitialBasket";
import * as ActionTypes from "./ActionTypes";

export const ReduxBasket = (state = [], action) => {
  console.log("STATE is " + JSON.stringify(state));

  switch (action.type) {
    case ActionTypes.UPDATE_BASKET: {
      const newState = action.payload;
      console.log(" NEW STATE is " + JSON.stringify(newState));

      return newState;
    }
    case ActionTypes.PUT_IN_BASKET: {
      if (!state) {
        state = new Array(0);
      }
      const newItem = {
        ...action.payload,
        id: state ? state.length : 0,
        quantity: 1,
      };

      const newState = state.concat(newItem);
      console.log(" NEW STATE is " + JSON.stringify(newState));

      return newState;
    }
    default:
      return state;
  }
};