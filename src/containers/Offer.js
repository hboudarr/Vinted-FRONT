import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Offer = (props) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(
                //     `https://vinted-bdr.herokuapp.com/offer/${id}`
                // );
                const response = await axios.get(
                    `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
                );
                setData(response.data);

                setIsLoading(false);
            } catch (error) {
                console.log({ error: error.message });
            }
        };
        fetchData();
    }, [id]);
    return isLoading ? (
        <div>En chargement ...</div>
    ) : (
        <div className="individual-offer">
            <div className="left">
                {console.log(data)}
                <img src={data.product_image.secure_url} alt="" />
            </div>
            <div className="right">
                <h1>{data.product_price} €</h1>
                <div className="details">
                    {data.product_details.map((elem, index) => {
                        const keys = Object.keys(elem);
                        return (
                            <div className="details2">
                                <div className="left">{keys[0]}</div>
                                <div className="right">{elem[keys[0]]}</div>
                            </div>
                        );
                    })}
                </div>
                <div className="middle"></div>
                <div className="down-part">
                    <h2>{data.product_name}</h2>
                    <p>{data.product_description}</p>
                    <div className="owner">
                        <img
                            src={data.owner.account.avatar.secure_url}
                            alt=""
                        />
                        <span>{data.owner.account.username}</span>
                    </div>
                </div>
                <button>Acheter</button>
            </div>
        </div>
    );
};

export default Offer;
