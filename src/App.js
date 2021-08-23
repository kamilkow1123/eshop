import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//components
import Navbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import ProductCard from "./components/products/ProductCard";

const App = () => {
    const [ isSidebarOpen, setSidebarOpen ] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <Router>
                <Navbar toggleSidebar={toggleSidebar} />
                <Sidebar
                    toggleSidebar={toggleSidebar}
                    isSidebarOpen={isSidebarOpen}
                />
                <Switch>
                    <Route path="/" component={ProductCard} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
