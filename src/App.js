import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPizzas } from "./redux";
import { useEffect } from "react";

import { Header } from "./components";
import { Cart, Home } from "./pages";

function App() {
    const dispatch = useDispatch();
    const sortBy = useSelector(({ filters }) => filters.sortBy);
    //json server on localhost:3001;

    const fetchData = async (sortBy) => {
        try {
            const response = await fetch(`http://localhost:3001/pizzas?_order=asc&_sort=${ sortBy }`);
            const pizzas = await response.json();
            dispatch(setPizzas(pizzas));
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchData(sortBy);
    }, [sortBy]);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Switch>
                    <Route path={ '/cart' } component={ Cart }/>
                    <Route path={ '/' } component={ Home }/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
