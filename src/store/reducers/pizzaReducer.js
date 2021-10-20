import { SET_PIZZAS } from "../action-types";

const initialState = {
    pizzas: []
};

export const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS: {
            return { ...state, pizzas: action.payload }
        }
        default:
            return state

    }
};

