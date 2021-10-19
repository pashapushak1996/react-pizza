import { Categories, PizzaItem, SortMenu } from "../components";
import { pizzaService } from "../services";
import { useEffect, useState } from "react";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);

    const fetchData = async () => {
        const { pizzas } = await pizzaService.getAllPizzas();
        setPizzas(pizzas);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={ [
                    'Мясные',
                    'Вегетарианская',
                    'Гриль',
                    'Острые',
                    'Закрытые'] }/>
                <SortMenu items={ ['популярности', 'цене', 'алфавиту'] }/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { pizzas.map((obj) => <PizzaItem key={ obj.id } { ...obj }/>) }
            </div>
        </div>
    );
};

export default Home;


