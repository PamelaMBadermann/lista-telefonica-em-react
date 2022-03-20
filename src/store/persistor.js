import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const persistedReducers = (reducers) => {
    return persistReducer(
        {
            key: 'my-states',
            storage,
        },
        reducers
    );
};
