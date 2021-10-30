import { ADD_CART_ITEM, REMOVE_ALL_CART_ITEM_BY_ID, REMOVE_CART_ITEM, SET_CART_ITEMS } from "../action-types";

const initialState = {
    cartItems: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = (arr) => arr.reduce((acc, curr) => acc + curr.price, 0);

const getAllCartItems = (arr) =>
    Object
        .values(arr.cartItems)
        .flatMap((item) => item.items);


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART_ITEMS:
            return { ...state, cartItems: action.payload };

        case REMOVE_CART_ITEM: {
            const cartItemLength = state.cartItems[action.payload.id].items.length;

            if (cartItemLength > 1) {
                state.cartItems[action.payload.id].items.splice(0, 1);
            }

            const newItems = {
                ...state.cartItems,
                [action.payload.id]: {
                    items: state.cartItems[action.payload.id].items,
                    totalPrice: getTotalPrice(state.cartItems[action.payload.id].items)
                }
            };

            const allCartItems = getAllCartItems(state.cartItems);

            const totalPrice = getTotalPrice(allCartItems);

            return {
                ...state, cartItems: newItems,
                totalCount: allCartItems.length,
                totalPrice
            };

        }
        case REMOVE_ALL_CART_ITEM_BY_ID: {
            delete state.cartItems[action.payload];

            const allCartItems = getAllCartItems(state.cartItems);

            const totalPrice = getTotalPrice(allCartItems);

            return {
                ...state, cartItems: { ...state.cartItems },
                totalCount: allCartItems.length,
                totalPrice
            }
        }
        case ADD_CART_ITEM: {
            const currentPizzaItems = !state.cartItems[action.payload.id]
                ? [action.payload]
                : [...state.cartItems[action.payload.id].items, action.payload];

            const newItems = {
                ...state.cartItems,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            };

            const allCartItems = getAllCartItems(state.cartItems);

            const totalPrice = getTotalPrice(allCartItems);

            return {
                ...state, cartItems: newItems,
                totalCount: allCartItems.length,
                totalPrice
            };
        }
        default:
            return state
    }
}