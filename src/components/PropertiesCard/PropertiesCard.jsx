import Properties from "../../hooks/Properties";
import Card from "../Card/Card";
import 'animate.css';

const PropertiesCard = () => {

    const { properties } = Properties();

    return (
        <div>
            <h3 className="font-bold text-5xl pl-24 my-12 animate__animated animate__bounce">Let us help you to <br /> find your dream home</h3>
            <div className="lg:grid lg:grid-cols-2">
                {
                    properties.map(property => (<Card key={property.id} property={property} />))
                }
            </div>
        </div>
    );
};

export default PropertiesCard;