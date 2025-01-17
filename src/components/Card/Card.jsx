import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Card = ({ property }) => {

    useEffect(() => {
        Aos.init();
    }, [])

    const { id, estate_title, segment_name, description, price, status, area, location, facilities, image } = property || {};

    return (
        <div className="card w-96 bg-base-100 shadow-xl my-5 ml-20" data-aos="flip-left">
            <figure><img className="w-full h-60" src={image} alt="house" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {estate_title}
                    <div className="badge badge-secondary">{status}</div>
                </h2>
                <div className="flex items-center">
                    <MdLocationPin />
                    <p className="ml-3"> {location}</p>
                </div>
                <div className="card-actions justify-start my-5">
                    <div className="badge badge-outline">{area}</div>
                    <div className="badge badge-outline">{price}</div>
                    <div className="badge badge-outline">{segment_name}</div>
                </div>
                <Link to={`/estate-details/${id}`}><button className="btn btn-sm">View Property</button></Link>
            </div>
        </div>
    );
};

export default Card;