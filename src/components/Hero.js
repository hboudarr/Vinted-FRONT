import hero from "../img/hero-2.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <img src={hero} alt="" />
            <div className="button-hero">
                <h1>Prêts à faire du tri dans vos placards ?</h1>
                <Link to="/login">
                    {" "}
                    <button>Commencer à vendre</button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
