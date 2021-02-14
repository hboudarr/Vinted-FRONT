// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import "./App.scss";
// import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";

library.add(faSearch, faMinus, faPlus);

function App() {
    const [userToken, setUserToken] = useState();

    const setUser = (token) => {
        if (token) {
            //creer un cookie
            Cookies.set("userToken", token, { expires: 7 });
            // mettre a jour le state userToken
            setUserToken(token);
        } else {
            // supprimer le cookier quand l'utilisateur se deconnecte
            Cookies.remove("userToken");
            // mettre a jour le state token
            setUserToken(null);
        }
    };
    return (
        <Router>
            <Header userToken={userToken} setUser={setUser} />
            <Switch>
                <Route path="/offer/:id">
                    <Offer />
                </Route>

                <Route path="/signup">
                    <Signup setUser={setUser} />
                </Route>
                <Route path="/login">
                    <Login setUser={setUser} />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
