import { createStore, combineReducers } from "redux";
import { putInBasket } from "./putInBasket-reducer";
import { updateBasket } from "./updateBasket-reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ updateBasket, putInBasket }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux Devtools
  );

  return store;
};
