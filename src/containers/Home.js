import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://vinted-bdr.herokuapp.com/offers"
                );
                // const response = await axios.get(
                //     "https://lereacteur-vinted-api.herokuapp.com/offers"
                // );
                setData(response.data);

                setIsLoading(false);
            } catch (error) {
                console.log({ error: error.message });
            }
        };
        fetchData();
    }, []);

    return isLoading ? (
        <div>Chargement en cours</div>
    ) : (
        <div>
            <Hero />
            <div className="home container">
                {data.offers.map((elem, index) => {
                    return (
                        <Link to={`/offer/${elem._id}`}>
                            <div onClick={() => {}} className="offer">
                                <div className="avatar">
                                    {elem.owner.account.avatar.secure_url ? (
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

                                <div className="pics">
                                    <img
                                        src={
                                            elem.product_pictures[0].secure_url
                                        }
                                        alt=""
                                    />
                                </div>
                                <div className="infos">
                                    {" "}
                                    <span> {elem.product_price} € </span>
                                    <ul>
                                        {elem.product_details.map(
                                            (elem, index) => {
                                                const keys = Object.keys(elem);
                                                // console.log(elem.marque);
                                                console.log(elem.MARQUE);
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
