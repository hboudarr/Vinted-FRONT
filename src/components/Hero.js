// import package
import { Link } from "react-router-dom";

// img import
import hero from "../img/hero-2.jpeg";
import Publish from "../containers/Publish";

const Hero = ({ userToken }) => {
    return (
        <div className="hero">
            <img src={hero} alt="" />
            <div className="button-hero">
                <h1>Prêts à faire du tri dans vos placards ?</h1>
                {/* utiliser useLocation afin de determiner la provenance.  */}
                <Link to={userToken ? "/publish" : "/login"}>
                    <button>Commencer à vendre</button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
