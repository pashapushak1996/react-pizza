import { SET_IS_LOADING } from "../action-types";
import { pizzaService } from '../../services';

const fetchPizzas = (sortBy, activeCategory) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const pizzas = await pizzaService.getAllPizzas(sortBy, activeCategory);

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