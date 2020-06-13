import * as ActionTypes from './ActionTypes';
import { fullPlantList } from '../shared/data/fullPlantList';


export const putInBasket = (index) => {
    const selectedItem = fullPlantList.filter(item => item.index === index);
    console.log("Selected item: " + JSON.stringify(selectedItem));  // Debug

    return (
        {
            type: ActionTypes.PUT_IN_BASKET,
            payload: selectedItem
        }
    );
};

// == Now implemented in the local state ==
export const updateBasket = (basket) => (
    {
        type: ActionTypes.UPDATE_BASKET,
        payload: basket
    }
);