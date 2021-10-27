import { Route, Switch } from "react-router-dom";

import { Header } from "./components";
import { Cart, Home } from "./pages";

function App() {
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
