import { ADD_CART_ITEM, SET_CART_ITEMS } from "../action-types";

const setCartItems = (items) => ({ type: SET_CART_ITEMS, payload: items });

const addCartItem = (cartItem) => ({ type: ADD_CART_ITEM, payload: cartItem });
export {
    setCartItems,
    addCartItem
};