export const pizzaService = {
    getAllPizzas: async (sortBy, activeCategory) => {
        const response = await fetch(
            `http://localhost:3001/pizzas?_order=asc&_sort=${ sortBy }${
                activeCategory && `&&category=${ activeCategory }`
            }`
        );

        const pizzas = await response.json();

        return pizzas;
    }
};
