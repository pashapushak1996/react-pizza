import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "./components";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { setPizzas } from "./store/action-creators";

function App() {
    const dispatch = useDispatch();

    //Todo Зробити додавання в корзину через редакс

    const pizzas = useSelector(({ pizzaReducer }) => pizzaReducer.pizzas);

    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/db.json');
        const { pizzas } = await response.json();

        dispatch(setPizzas(pizzas));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Switch>
                    <Route path={ '/cart' } render={ () => <Cart/> }/>
                    <Route path={ '/' } render={ () => <Home items={ pizzas }/> }/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
