import { SET_PIZZAS } from "../action-types";

const initialState = {
    items: []
};

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS: {
            return { ...state, items: action.payload }
        }
        default:
            return state

    }
};

