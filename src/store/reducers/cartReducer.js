import { ADD_CART_ITEM, SET_CART_ITEMS } from "../action-types";

const initialState = {
    cartItems: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:
            return { ...state, cartItems: action.payload };
        case ADD_CART_ITEM:
            const foundItem = state.cartItems.find((item) => item.id === action.payload.id);

            if (foundItem) {

                return {
                    ...state, cartItems: state.cartItems.reduce((acc, curr) => {
                        if (curr.id === foundItem.id) {
                            acc.push({ ...foundItem, count: foundItem.count + 1 })
                        }
                        return acc;
                    }, [])
                }
            }

            return { ...state, cartItems: [...state.cartItems, action.payload] };

        default:
            return state
    }
}