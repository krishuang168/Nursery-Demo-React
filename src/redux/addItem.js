import { initialBasket } from '../shared/data/InitialBasket';
import * as ActionTypes from './ActionTypes';

export const initialState = {
    basket: initialBasket
};

export const addItem = (state = initialState, action) => {
    switch (action.type){
        case ActionTypes.ADD_ITEM:
            var itemAdded = action.payload;
            
            
            return state.concat(itemAdded);
        default:
            return state;
    }
    
    
};