import { ADD_CART_ITEM, SET_CART_ITEMS } from "../action-types";

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalCount: 0
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:
            return { ...state, cartItems: action.payload };
        case ADD_CART_ITEM: {
            const foundItem = state.cartItems.find((item) => item.id === action.payload.id);
            return {
                ...state, cartItems: foundItem
                    ? state.cartItems.reduce((acc, curr) => {
                        if (curr.id === action.payload.id) {
                            curr.count++;
                            curr.price += foundItem.price;
                        }
                        acc.push(curr);
                        return acc;
                    }, [])
                    : [...state.cartItems, { ...action.payload, count: 1 }],
                totalPrice: foundItem ? state.cartItems.reduce((acc, curr) => acc + curr.price, 0) : state.totalPrice + action.payload.price,
                totalCount: foundItem ? state.cartItems.reduce((acc, curr) => acc + curr.count, 0) : state.totalCount + 1
            };
        }
        default:
            return state
    }
}