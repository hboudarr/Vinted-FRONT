// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
// import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
library.add(faStar, faMinus, faPlus);

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="">
                    <Offer />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
