import { SET_IS_LOADING } from "../action-types";

const fetchPizzas = (sortBy, activeCategory) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const response = await fetch(
            `http://localhost:3001/pizzas?_order=asc&_sort=${ sortBy }${
                activeCategory && `&&category=${ activeCategory }`
            }`
        );
        const pizzas = await response.json();
        dispatch(setPizzas(pizzas));
    } catch (e) {
        console.log(e);
    } finally {
        dispatch(setIsLoading(false));
    }
};

const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, payload: isLoading });

const setPizzas = (items) => ({ type: "SET_PIZZAS", payload: items });

export {
    fetchPizzas,
    setPizzas
};