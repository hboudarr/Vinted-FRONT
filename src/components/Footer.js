// img import
import logo from "../img/logo-small.png";

const Footer = () => {
    return (
        <footer>
            <div>
                {/* logo */}
                <img src={logo} alt="logo-small" />
            </div>
            <div>
                <p>Made at le Reacteur by Halim Boudarra</p>
            </div>
            {/* personnal info + link */}
            <div class="lien">
                <a href="https://github.com/hboudarr" target="_blank">
                    GitHub
                </a>{" "}
                <a
                    href="https://www.linkedin.com/in/halim-boudarra-4b74a4143/"
                    target="_blank"
                >
                    Linkedin
                </a>
            </div>
        </footer>
    );
};

export default Footer;
