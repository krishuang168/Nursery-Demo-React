import { createStore, combineReducers } from "redux";
import { putInBasket } from "./putInBasket-reducer";
import { ReduxBasket } from "./ReduxBasket-reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ ReduxBasket, putInBasket }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux Devtools
  );

  return store;
};
