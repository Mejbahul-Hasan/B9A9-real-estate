import { useEffect, useState } from "react";
import Properties from "../../hooks/Properties";
import { Link, useParams } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";


const EstateDetails = () => {

    const [singleEstate, setSingleEstate] = useState([]);
    const { id } = useParams();
    const { properties } = Properties();

    useEffect(() => {
        if (properties) {
            const singleData = properties.find((item) => item.id == id);
            setSingleEstate(singleData);
        }
    }, [properties, id]);

    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = singleEstate || {};

    return (
        <div className="hero bg-base-200 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="w-96 h-80 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold">{estate_title}</h1>
                    <div className="flex items-center">
                        <MdLocationPin />
                        <p className="ml-3"> {location}</p>
                    </div>
                    <div className="card-actions justify-start my-5 border-t-2 border-b-2 border-gray-300 py-4">
                        <div className="badge badge-secondary">{status}</div>
                        <div className="badge badge-outline">{price}</div>
                        <div className="badge badge-outline">{area}</div>
                        <div className="badge badge-outline">{segment_name}</div>
                    </div>
                    <p className="pb-5">{description}</p>
                    <div className="flex gap-5 border-t-2 border-b-2 border-gray-300">
                        <h2 className="card-title">Amenities:</h2>
                        <ul className="p-3 flex gap-10">
                            {facilities?.map(facility =>
                                <li key={facility}>#  {facility}</li>)}
                        </ul>
                    </div>
                    <div className="text-end mt-6">
                        <Link to='/'><button className="btn bg-gray-400">Back to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;