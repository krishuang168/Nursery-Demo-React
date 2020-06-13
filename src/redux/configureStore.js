import { createStore, combineReducers } from 'redux';
import { addItem} from './addItemReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers( {addItem, } )
    );

    return store;
};