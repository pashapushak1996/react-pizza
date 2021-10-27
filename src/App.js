import { Route, Switch } from "react-router-dom";

import { Header } from "./components";
import { Cart, Home } from "./pages";

function App() {
    //Todo Зробити сортування по возрастанию и по убиванию
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
