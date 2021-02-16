import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
    // login state
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // history state
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // requite axios pour check si il existe
        // const response = await axios.post(
        //     "https://vinted-bdr.herokuapp.com/user/login",
        //     {
        //         email: email,
        //         password: password,
        //     }
        // );

        const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/login",
            {
                email: email,
                password: password,
            }
        );

        const token = response.data.token;
        setUser(token);
        // go to the home page
        history.push("/");
    };
    return (
        <div className="sign">
            <form onSubmit={handleSubmit}>
                <h1>Se connecter</h1>
                <input
                    type="Email"
                    placeholder="Adresse email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <button type="Submit">Se connecter</button>
                <Link to="/signup">Pas encore de compte ? inscrit toi !</Link>
            </form>
        </div>
    );
};

export default Login;
