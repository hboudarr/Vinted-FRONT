// import  link to link pages.
import { Link } from "react-router-dom";

// img import
import logo from "../img/logo-vinted.png";

// fontAwesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ setUser, userToken }) => {
    return (
        <header className="container">
            {/* HEADER LEFT */}
            <div className="header-left">
                <div>
                    {/* home page link */}
                    <Link to="/">
                        <img src={logo} alt="Logo Vinted vert et blanc" />
                    </Link>
                </div>
                <div class="search">
                    &nbsp; <FontAwesomeIcon icon="search" color="#bbbb" />{" "}
                    &nbsp; &nbsp;<span>Recherche des articles</span>
                </div>
            </div>
            {/* HEADER RIGHT */}
            <div className="header-right">
                {/* LOGIN-SIGNUP/ LOGOUT button */}
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
                        {/* sign up page */}
                        <Link to="/signup">
                            <button>S'inscrire</button>
                        </Link>
                        {/* log in page */}
                        <Link to="/login">
                            {" "}
                            <button>Se connecter</button>{" "}
                        </Link>
                        {/* log out page */}
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
