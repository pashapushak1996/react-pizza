export const pizzaService = {
    getAllPizzas: async (sortBy, activeCategory) => {
        const response = await fetch(
            '/pizzas?' +
            (activeCategory ? `category=${ activeCategory }` : '')
            + `&_sort=${ sortBy.type }&_order=${ sortBy.order }`
        );

        const pizzas = await response.json();

        return pizzas;
    }

};
