import { ADD_CART_ITEM, CLEAR_CART, REMOVE_CART_ITEM } from "../action-types";

const clearCart = () => ({ type: CLEAR_CART });

const removeCartItem = (id) => ({ type: REMOVE_CART_ITEM, payload: id });

const addCartItem = (cartItem) => ({ type: ADD_CART_ITEM, payload: cartItem });

export {
    addCartItem,
    removeCartItem,
    clearCart
};