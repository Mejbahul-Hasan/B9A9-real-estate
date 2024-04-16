import { useEffect, useState } from "react";
import Properties from "../../hooks/Properties";
import { useParams } from "react-router-dom";

const EstateDetails = () => {

    const [singleEstate, setSingleEstate] = useState([]);
    const { id } = useParams();
    const { properties } = Properties();

    useEffect(() => {
        if (properties) {
            const singleData = properties.find((item) => item.id == id);
            setSingleEstate(singleData);
            console.log("estate details page", singleData);
        }
    }, [properties, id]);

    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = singleEstate || {};

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{estate_title}</h1>
                    <p className="py-6">{description}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;