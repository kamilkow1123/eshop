import { HashRouter as Router, Switch, Route } from "react-router-dom";
//components
import Navbar from "./components/navigation/Navbar";
import ProductCard from "./components/products/ProductCard";

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={ProductCard} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
