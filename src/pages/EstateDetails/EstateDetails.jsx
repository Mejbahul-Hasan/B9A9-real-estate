import { useEffect, useState } from "react";
import Properties from "../../hooks/Properties";
import { Link, useParams } from "react-router-dom";

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
        <div className="hero bg-base-200 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="w-96 h-80 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold">{estate_title}</h1>
                    <p className="py-6">{description}</p>
                    <Link to='/'><button className="btn btn-primary">Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;