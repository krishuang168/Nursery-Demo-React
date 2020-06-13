import { initialBasket } from '../shared/data/InitialBasket';
import * as ActionTypes from './ActionTypes';

export const addItem = (state = initialBasket, action) => {
    console.log( JSON.stringify(state) );

    if (action.type === ActionTypes.ADD_ITEM) {
        const newItem = { ...action.payload, id: state.basket.length };
        return { ...state, basket: state.basket.concat(newItem) };
    }
    return state;
};