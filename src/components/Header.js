import { Link } from "react-router-dom";

const Header = ({ setUser, userToken }) => {
    return (
        <header>
            <div>
                {" "}
                logo
                <img src="" alt="" />
            </div>
            {userToken ? (
                <button
                    onClick={() => {
                        setUser(null);
                    }}
                >
                    Se deconnecter
                </button>
            ) : (
                <div>
                    <Link to="/signup">S'inscrire </Link>
                    <Link to="/login">Se connecter</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
