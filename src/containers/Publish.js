import { useState } from "react";
import axios from "axios";

const Publish = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [file, setFile] = useState();
    const handleSubmit = async (event, req, res) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("pictures", file);
        formData.append("title", title);
        formData.append("price", price);

        const token = "13940390429024";

        try {
            const response = await axios.get(
                "https://localhost:3000/offer/publish",
                formData,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            setData(response.data);
            setIsLoading(false);
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="price"
                    onChange={(event) => {
                        setPrice(event.target.value);
                    }}
                />
                <input
                    type="file"
                    placeholder="select files"
                    multiple={true}
                    onChange={(event) => {
                        setFile(event.target.value[0]);
                    }}
                />
                <button type="submit">Publier</button>
            </form>
        </div>
    );
};

export default Publish;
