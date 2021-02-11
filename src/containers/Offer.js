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
        <div>
            {console.log(data.product_image)}
            <div>
                <img src={data.product_image.secure_url} alt="" />
            </div>
            <div></div>
        </div>
    );
};

export default Offer;
