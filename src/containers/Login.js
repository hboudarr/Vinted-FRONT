import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = ({ setUser }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // requite axios pour check si il existe
        const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/login",
            {
                email: email,
                password: password,
            }
        );
        const token = response.data.token;
        setUser(token);
        // naviguer vers la home page
        history.push("/");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {" "}
                <input
                    type="Email"
                    placeholder="Email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <input
                    type="Password"
                    placeholder="Password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <button type="Submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Login;
