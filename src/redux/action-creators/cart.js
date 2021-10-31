import { ADD_CART_ITEM, CLEAR_CART, MINUS_CART_ITEM, REMOVE_CART_ITEM } from "../action-types";

const clearCart = () => ({ type: CLEAR_CART });

const removeCartItem = (id) => ({ type: REMOVE_CART_ITEM, payload: id });

const addCartItem = (cartItem) => ({ type: ADD_CART_ITEM, payload: cartItem });

const minusCartItem = (id) => ({ type: MINUS_CART_ITEM, payload: id });

export {
    addCartItem,
    clearCart,
    minusCartItem,
    removeCartItem
};