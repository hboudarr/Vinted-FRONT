import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://lereacteur-vinted-api.herokuapp.com/offers"
                );
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
        <div className="home">
            {data.offers.map((elem, index) => {
                return (
                    <Link to={`/offer/${elem._id}`}>
                        <div onClick={() => {}} className="offer">
                            <div className="avatar">
                                {elem.owner.account.avatar.secure_url ? (
                                    <img
                                        src={
                                            elem.owner.account.avatar.secure_url
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
                                    src={elem.product_pictures[0].secure_url}
                                    alt=""
                                />
                            </div>
                            <div>
                                <span>{elem.product_price}</span>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Home;
