const initialState = {
    reviews: [],
    error: null
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_REVIEWS_SUCCESS':
            return {
                ...state,
                reviews: action.payload,
                error: null
            };
        case 'FETCH_REVIEWS_FAILURE':
            return {
                ...state,
                reviews: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default reviewReducer;