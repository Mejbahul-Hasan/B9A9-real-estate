import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import 'animate.css';

const PurchaseHistory = () => {

    return (
        <div>
            <h3 className="text-4xl font-bold text-center my-5 text-gray-500 animate__animated animate__tada">Purchase History</h3>
            <div className="hero bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/rGZ42tK/todd-kent-178j8t-Jr-Nlc-unsplash.jpg" className="w-96 h-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-semibold">Sunny Condo with City Views</h1>
                        <div className="flex items-center">
                            <MdLocationPin />
                            <p className="ml-3"> San Francisco, California</p>
                        </div>
                        <div className="card-actions justify-start my-5 border-t-2 border-b-2 border-gray-300 py-4">
                            <div className="badge badge-secondary">Sold</div>
                            <div className="badge badge-outline">$400,000</div>
                            <div className="badge badge-outline">2200 sq ft</div>
                        </div>
                        <p className="pb-5">Enjoy the convenience of nearby cafes, boutiques, and transportation options, all within easy reach. Ideal for modern professionals or students, this studio offers the perfect blend of urban living and cosmopolitan charm.</p>
                        <div className="flex gap-5 border-t-2 border-b-2 border-gray-300">
                            <h2 className="card-title font-normal">Amenities:</h2>
                            <ul className="p-3 flex gap-10">
                                <li>#  city view</li>
                                <li>#  balcony</li>
                                <li>#  fitness center</li>
                            </ul>
                        </div>
                        <div className="text-end mt-6">
                            <Link to='/'><button className="btn bg-gray-400">Back to Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseHistory;