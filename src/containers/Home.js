// package import
import axios from "axios";
import { useState, useEffect } from "react";

// link import
import { Link } from "react-router-dom";

// component import
import Hero from "../components/Hero";

const Home = ({ userToken }) => {
    // states
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // data refrech
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(
                //     "https://vinted-bdr.herokuapp.com/offers"
                // );
                const response = await axios.get(
                    "https://lereacteur-vinted-api.herokuapp.com/offers"
                );
                // set Data, and isLoading falsy
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log({ error: error.message });
            }
        };
        fetchData();
    }, []); // tableau vide pour evider la boucle infini (page offer by id : id)

    return isLoading ? (
        <div>Chargement en cours</div>
    ) : (
        <div>
            {/* component import */}
            <Hero userToken={userToken} />
            <div className="home container">
                {data.offers.map((elem, index) => {
                    console.log(userToken);
                    return (
                        // offer link by id from the home page
                        <Link to={`/offer/${elem._id}`}>
                            <div onClick={() => {}} className="offer">
                                <div className="avatar">
                                    {/* Owner info */}

                                    {elem.owner.account.avatar ? (
                                        <img
                                            src={
                                                elem.owner.account.avatar
                                                    .secure_url
                                            }
                                            alt=""
                                        />
                                    ) : (
                                        <img src="" alt="" />
                                    )}

                                    <span>{elem.owner.account.username}</span>
                                </div>
                                {/* Product pics */}
                                <div className="pics">
                                    {elem.product_pictures[0] ? (
                                        <img
                                            src={
                                                elem.product_pictures[0]
                                                    .secure_url
                                            }
                                            alt=""
                                        />
                                    ) : (
                                        ""
                                    )}
                                </div>
                                {/* product details */}
                                <div className="infos">
                                    <span> {elem.product_price} € </span>
                                    <ul>
                                        {elem.product_details.map(
                                            (elem, index) => {
                                                const keys = Object.keys(elem);
                                                return (
                                                    <li>
                                                        {elem.TAILLE ? (
                                                            <span>
                                                                {elem.TAILLE}
                                                            </span>
                                                        ) : (
                                                            ""
                                                        )}
                                                        {elem.MARQUE ? (
                                                            <span>
                                                                {elem.MARQUE}
                                                            </span>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;

/*
ajouter une route : payment.js

<Route path="/payment" Route >

Page offer : 
Sur le button Acheter ajouter un link : to="/payment"
dans le link passer des arguments car besoin du titre et du prix. 
to={{pathname: "/payment"}, state: {title: data.product_name, price: data.product_price}}

import de useLocation; 
import {useLocation} fron react router dom
import {loadStripe} from @stripe/strip[e-js]
imoport {Elements} from @stripe js

const Payment = () => {
    const location = useLocation();

    const { title, price } = location.state;
    return 
    div
    p
    vous souhaitez acheter un produit : {title} pour {price} euros 
    <Element stripe={stripePromise}>
    <CheckOutForm title={title} price={price}/>
    </Element>
}


Dans checkoutelement

import {CardElement, useElement, useStripe}

const CheckoiutForm = () => {

    const handleSubmit = async () => {

        event.preventDefault().

    // RECUPERER LES DONNEES DE CARDELEMENTS (useElement)
    const cardElements = elements.getElement(cardElement)

    //requete a stripe pour recuperer le token (useStripe)
    const striperesponse = await strip[e.createToken(cardElements, 
        { name: "token avec get cookie token"})
    }
    // console log(stripeResponse)
    const stripeToken = stripeResponse.token.id

}

*/
