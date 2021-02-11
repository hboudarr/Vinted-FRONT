import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // requete axios pour enregistrer dans la bdd le new utilisateur
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(event) => {
                        setUserName(event.target.value);
                    }}
                    type="text"
                    placeholder="username"
                />
                <input
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    type="email"
                    placeholder="email"
                />
                <input
                    onChange={(event) => {
                        setPhone(event.target.value);
                    }}
                    type="text"
                    placeholder="phone number"
                />
                <input
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    type="password"
                    placeholder="password"
                />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default Signup;
