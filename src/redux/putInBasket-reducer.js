import * as ActionTypes from './ActionTypes';

export const putInBasket = (state = [], action) => {

    if (action.type === ActionTypes.PUT_IN_BASKET) {
        const newItem = { ...action.payload, id: state.basket.length };
        const newState = { ...state, basket: state.basket.concat(newItem) };

        console.log( " NEW STATE is " + newState );
        return newState;
    }
    return state;
    
};