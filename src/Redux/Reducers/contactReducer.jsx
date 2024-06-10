// src/reducers/contactReducer.js
const initialState = {
    contactData: null,
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_CONTACT_FORM':
            return {
                ...state,
                contactData: action.payload,
            };
        default:
            return state;
    }
};

export default contactReducer;
