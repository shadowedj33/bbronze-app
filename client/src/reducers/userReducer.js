export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_USER_SUCCESS':
            return { ...state, ...action.payload };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}

const initialState = {
    authenticated: false,
    name: '',
    email: '',
    phone: '',
};