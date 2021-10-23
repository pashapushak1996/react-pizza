import { SET_CATEGORY, SET_SORT_BY } from "../action-types";

const initialState = {
    activeCategory: 0,
    sortBy: 'popular'
};

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return { ...state, activeCategory: action.payload };

        case SET_SORT_BY:
            return { ...state, sortBy: action.payload };

        default :
            return state
    }
};
