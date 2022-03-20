export const getContact = () => {
    return {
        type: 'contact/GET',
        payload: '',
    };
};

export const addContact = (payload) => {
    return {
        type: 'contact/ADD',
        payload,
    };
};
