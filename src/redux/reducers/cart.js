import { ADD_CART_ITEM, CLEAR_CART, MINUS_CART_ITEM, REMOVE_CART_ITEM } from "../action-types";

const initialState = {
    cartItems: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = (arr) => arr.reduce((acc, curr) => acc + curr.price, 0);


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_CART:
            return { ...state, cartItems: {}, totalPrice: 0, totalCount: 0 }


        case REMOVE_CART_ITEM: {
            const currentItems = { ...state.cartItems };

            const currentTotalPrice = currentItems[action.payload].totalPrice;
            const currentTotalCount = currentItems[action.payload].items.length;

            delete currentItems[action.payload];

            return {
                ...state, cartItems: currentItems,
                totalCount: state.totalCount - currentTotalCount,
                totalPrice: state.totalPrice - currentTotalPrice
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

            const totalCount = Object.keys(newItems).reduce(
                (acc, key) => newItems[key].items.length + acc,
                0,
            );

            const totalPrice = Object.keys(newItems).reduce(
                (acc, key) => newItems[key].totalPrice + acc,
                0,
            );

            return {
                ...state, cartItems: newItems,
                totalCount,
                totalPrice
            };
        }

        case  MINUS_CART_ITEM: {
            const copyOfCartItems = { ...state.cartItems };

            if (copyOfCartItems[action.payload].items.length > 1) {
                copyOfCartItems[action.payload].items = copyOfCartItems[action.payload].items.slice(1);
                copyOfCartItems[action.payload].totalPrice = getTotalPrice(copyOfCartItems[action.payload].items);
            }

            console.log(copyOfCartItems[action.payload]);

            const totalCount = Object.keys(copyOfCartItems).reduce(
                (acc, key) => copyOfCartItems[key].items.length + acc,
                0,
            );

            const totalPrice = Object.keys(copyOfCartItems).reduce(
                (acc, key) => copyOfCartItems[key].totalPrice + acc,
                0,
            );

            return {
                ...state, cartItems: { ...copyOfCartItems }, totalPrice, totalCount
            };
        }
        default:
            return state
    }
}