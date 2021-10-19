import { Header } from "./components";
import { Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Switch>
                    <Route path={ '/cart' } render={ () => <Cart/> }/>
                    <Route path={ '/' } render={ () => <Home/> }/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
