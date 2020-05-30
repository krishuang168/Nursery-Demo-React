import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
};

// export const ConfigureStore = () => {
//     const store = createStore(
//         combineReducers({
//             campsites: Campsites,
//             comments: Comments,
//             partners: Partners,
//             promotions: Promotions,
//             ...createForms({
//                 feedbackForm: InitialFeedback
//             })
//         }),
//     );

//     return store;
// }