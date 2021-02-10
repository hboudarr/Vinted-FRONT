import axios from "axios";
import { useState, useEffect } from "react";

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
        <div>
            {data.map((elem, index) => {
                console.log(elem);
                return (
                    <div>
                        <span></span>
                        <span></span>
                        <img src="" alt="" />
                    </div>
                );
            })}
        </div>
    );
};

export default Home;
