import { createStore, combineReducers } from "redux";
import { ReduxBasket } from "./BasketReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ ReduxBasket }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux Devtools
  );

  return store;
};
