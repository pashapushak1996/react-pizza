import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "./redux";
import { useEffect } from "react";

import { Header } from "./components";
import { Cart, Home } from "./pages";

function App() {
    const dispatch = useDispatch();
    const { sortBy, activeCategory } = useSelector(({ filters }) => filters);
    //json server on localhost:3001;
    //Todo Додати загрузку в редакс
    // Todo add thunk middleware
    //Todo add categoriesFilter


    useEffect(() => {
        dispatch(fetchPizzas(sortBy, activeCategory));
        console.log(activeCategory)
    }, [sortBy, activeCategory]);

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
