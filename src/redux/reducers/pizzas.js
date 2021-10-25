import { SET_IS_LOADING, SET_PIZZAS } from "../action-types";

const initialState = {
    items: [],
    isLoading: false
};

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload };

        case SET_PIZZAS:
            return { ...state, items: action.payload }

        default:
            return state

    }
};

