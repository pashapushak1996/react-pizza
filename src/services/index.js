export const pizzaService = {
    getAllPizzas: async (sortBy, activeCategory) => {
        const response = await fetch(
            'http://localhost:3001/pizzas?' +
            (activeCategory ? `category=${ activeCategory }` : '')
            + `&_sort=${ sortBy.type }&_order=${ sortBy.order }`
        );

        const pizzas = await response.json();

        return pizzas;
    }

};
