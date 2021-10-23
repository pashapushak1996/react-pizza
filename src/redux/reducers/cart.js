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

                if (foundItem.type !== action.payload.type && foundItem.size !== action.payload.size) {
                    return { ...state, cartItems: [...state.cartItems, action.payload] };
                }

                return {
                    ...state, cartItems: state.cartItems.reduce((acc, curr) => {
                        if (curr.id === foundItem.id && foundItem.type === action.payload.type && foundItem.size === action.payload.size) {
                            acc.push({
                                ...foundItem,
                                count: foundItem.count + 1,
                                price: curr.price + foundItem.price
                            });
                            return acc;
                        }

                        acc.push(curr);

                        return acc;
                    }, [])
                }


            }

            return { ...state, cartItems: [...state.cartItems, action.payload] };

        default:
            return state
    }
}