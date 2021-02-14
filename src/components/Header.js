import { Link } from "react-router-dom";
import logo from "../img/logo-vinted.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero from "../components/Hero";

const Header = ({ setUser, userToken }) => {
    return (
        <header className="container">
            <div className="header-left">
                <div>
                    <Link to="/">
                        <img src={logo} alt="Logo Vinted vert et blanc" />
                    </Link>
                </div>
                <div class="search">
                    &nbsp; <FontAwesomeIcon icon="search" color="#bbbb" />{" "}
                    &nbsp; &nbsp;<span>Recherche des articles</span>
                </div>
            </div>
            <div className="header-right">
                {userToken ? (
                    <button
                        className="deco"
                        onClick={() => {
                            setUser(null);
                        }}
                    >
                        Se deconnecter
                    </button>
                ) : (
                    <div className="button">
                        <Link to="/signup">
                            <button>S'inscrire</button>
                        </Link>

                        <Link to="/login">
                            {" "}
                            <button>Se connecter</button>{" "}
                        </Link>

                        <Link to="/login" className="last" href="">
                            <button> Vends tes articles</button>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
