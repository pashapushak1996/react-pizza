import { ADD_CART_ITEM, SET_CART_ITEMS } from "../action-types";

const setCartItems = (payload) => ({ type: SET_CART_ITEMS, payload });

const addCartItem = (payload) => ({ type: ADD_CART_ITEM, payload });
export {
    setCartItems,
    addCartItem
};