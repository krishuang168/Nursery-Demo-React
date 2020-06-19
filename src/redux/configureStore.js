import { createStore, combineReducers } from "redux";
import { ReduxBasket } from "./BasketReducer";
import { CheckoutModal } from "./CheckoutModalReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ ReduxBasket, CheckoutModal }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux Devtools
  );

  return store;
};
