// Package import
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// CSS import
import "./App.scss";

// fontAwesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

// container import
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Publish from "./containers/Publish";

// component import
import Header from "./components/Header";
import Footer from "./components/Footer";

// lib Awesome
library.add(faSearch, faMinus, faPlus);

// MAIN FUNCTION
function App() {
    // token state
    const [userToken, setUserToken] = useState();

    const setUser = (token) => {
        if (token) {
            // create cookie
            Cookies.set("userToken", token, { expires: 7 });
            // update token state
            setUserToken(token);
        } else {
            // delete cookier when sign out
            Cookies.remove("userToken");
            // update token state
            setUserToken(null);
        }
    };
    return (
        <Router>
            {/* HEADER COMPONENT */}
            <Header userToken={userToken} setUser={setUser} />
            <Switch>
                {/* OFFER BY ID CONTAINER*/}
                <Route path="/offer/:id">
                    <Offer />
                </Route>
                {/* SIGN UP CONTAINER */}
                <Route path="/signup">
                    <Signup setUser={setUser} />
                </Route>
                {/* LOGIN CONTAINER */}
                <Route path="/login">
                    <Login setUser={setUser} />
                </Route>
                <Route path="/publish">
                    <Publish />
                </Route>
                {/* HOME CONTAINER */}
                <Route path="/">
                    <Home userToken={userToken} />
                </Route>
            </Switch>
            {/* FOOTER COMPONENT */}
            <Footer />
        </Router>
    );
}

export default App;
