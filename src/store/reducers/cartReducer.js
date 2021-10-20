import { ADD_CART_ITEM, SET_CART_ITEMS } from "../action-types";

const initialState = {
    cartItems: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:
            return { ...state, cartItems: action.payload };
        case ADD_CART_ITEM:
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        default:
            return state
    }
}