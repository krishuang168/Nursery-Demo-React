import { initialBasket } from '../shared/data/InitialBasket';
import * as ActionTypes from './ActionTypes';

export const updateBasket = (state = initialBasket, action) => {
    console.log( "STATE is " + JSON.stringify(state) );

    if (action.type === ActionTypes.UPDATE_BASKET) {
        const newState = action.payload;
        console.log( " NEW STATE is " + JSON.stringify(newState) );
        return newState;
    }
    return state;
};