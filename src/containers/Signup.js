import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = ({ setUser }) => {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

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

        const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/signup",
            {
                email: email,
                username: userName,
                phone: phone,
                password: password,
            }
        );
        setUser(response.data.token);

        history.push("/");
    };

    return (
        <div className="sign">
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
                {/* <input
                    onChange={(event) => {
                        setPhone(event.target.value);
                    }}
                    type="text"
                    placeholder="Numero de téléphone"
                /> */}
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
