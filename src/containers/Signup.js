// import package
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// import link
import { Link } from "react-router-dom";

const Signup = ({ setUser }) => {
    // states for input form
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    // On form submit behaviors :
    const handleSubmit = async (event) => {
        event.preventDefault();
        // requete axios pour enregistrer dans la bdd le new utilisateur
        // const response = await axios.post(
        //     "https://vinted-bdr.herokuapp.com//user/signup",
        //     {
        //         email: email,
        //         username: userName,
        //         phone: phone,
        //         password: password,
        //     }
        // );

        // axios's request sign up form
        const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/signup",
            {
                email: email,
                username: userName,
                password: password,
            }
        );
        setUser(response.data.token);

        history.push("/");
    };

    return (
        <div className="sign">
            {/* FORM */}
            <form onSubmit={handleSubmit}>
                <h1>S'inscrire</h1>
                <input
                    onChange={(event) => {
                        setUserName(event.target.value);
                    }}
                    type="text"
                    placeholder="Nom d'utilisateur"
                />
                <input
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    type="email"
                    placeholder="Email"
                />
                <input
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    type="password"
                    placeholder="Mot de passe"
                />
                <div className="newsletter">
                    <input type="checkbox" />{" "}
                    <span>S'inscrire à notre newsletter</span>
                    <p>
                        En m'inscrivant je confirme avoir lu et accepté les
                        Termes & Conditions et Politique de Confidentialité de
                        Vinted. Je confirme avoir au moins 18 ans.
                    </p>
                </div>
                <button type="submit">S'inscrire</button>
                <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
            </form>
        </div>
    );
};

export default Signup;
