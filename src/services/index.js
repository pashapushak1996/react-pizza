import { instance } from "./axiosConfig";

export const pizzaService = {
    getAllPizzas: async () => {
        const { data } = await instance.get('');
        return data;
    },
};