import * as ActionTypes from './ActionTypes';

export const addItem = (index) => (
    {
        type: ActionTypes.ADD_ITEM,
        payload: { index: index }
    }
);

export const RemoveItem = (index) => (
    {
        type: ActionTypes.REMOVE_ITEM,
        payload: { index: index }
    }
);

export const ItemPlusOne = (index) => (
    {
        type: ActionTypes.ITEM_PLUS_ONE,
        payload: { index: index }
    }
);

export const ItemMinusOne = (index) => (
    {
        type: ActionTypes.ITEM_MINUS_ONE,
        payload: { index: index }
    }
);