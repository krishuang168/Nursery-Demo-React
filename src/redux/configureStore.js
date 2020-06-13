import { createStore, combineReducers } from "redux";
import { putInBasket } from "./putInBasket-reducer";
import { updateBasket } from "./updateBasket-reducer";

export const ConfigureStore = () => {
  const store = createStore(combineReducers({ updateBasket, putInBasket }));

  return store;
};
