import { combineReducers } from "redux";

import { pizzaReducer } from "./pizzaReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({ pizzaReducer, cartReducer })