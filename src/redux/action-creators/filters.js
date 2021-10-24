import { SET_CATEGORY, SET_SORT_BY } from "../action-types";

const setCategory = (categoryIndex) => ({ type: SET_CATEGORY, payload: categoryIndex });
const setSortBy = (name) => ({ type: SET_SORT_BY, payload: name });

export {
    setCategory,
    setSortBy
}