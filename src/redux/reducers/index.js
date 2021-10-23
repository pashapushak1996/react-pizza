import { combineReducers } from "redux";

import { pizzasReducer } from "./pizzas";
import { cartReducer } from "./cart";
import { filtersReducer } from "./filters";

export const rootReducer = combineReducers({ pizzas: pizzasReducer, cart: cartReducer, filters: filtersReducer });