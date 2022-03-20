const initialState = [];

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'contact/GET':
            return state;
        case 'contact/ADD':
            return [...state, action.payload];
        default:
            return state;
    }
};
