import { ADD_CART_ITEM, CLEAR_CART, REMOVE_CART_ITEM } from "../action-types";

const initialState = {
    cartItems: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = (arr) => arr.reduce((acc, curr) => acc + curr.price, 0);

const getAllCartItems = (obj) =>
    Object
        .values(obj)
        .flatMap((item) => item.items);


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_CART:
            return { ...state, cartItems: {}, totalPrice: 0, totalCount: 0 }


        case REMOVE_CART_ITEM: {
            const currentItems = { ...state.cartItems };

            const { currentTotalPrice, currentTotalCount } = Object.keys(currentItems)
                .reduce((acc, key) => {
                    if (key === action.payload.toString()) {
                        acc.currentTotalPrice = currentItems[key].totalPrice;
                        acc.currentTotalCount = currentItems[key].items.length;
                    }

                    return acc;
                }, {});

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

            const allCartItems = getAllCartItems(newItems);

            const totalPrice = getTotalPrice(allCartItems);

            return {
                ...state, cartItems: newItems,
                totalCount: allCartItems.length,
                totalPrice: totalPrice
            };
        }
        default:
            return state
    }
}