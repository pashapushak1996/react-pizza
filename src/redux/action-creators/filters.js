import { SET_CATEGORY, SET_SORT_BY } from "../action-types";

const setCategory = (category) => ({ type: SET_CATEGORY, payload: category });
const setSortBy = (name) => ({ type: SET_SORT_BY, payload: name });

export {
    setCategory,
    setSortBy
}