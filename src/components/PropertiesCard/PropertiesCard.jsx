import Properties from "../../hooks/Properties";
import Card from "../Card/Card";

const PropertiesCard = () => {

    const {properties} = Properties();

    return (
        <div>
            <h3 className="font-bold text-3xl pl-24 my-12">Our Choice of <br /> popular real estate</h3>
            <div className="lg: grid grid-cols-2">
            {
                properties.map(property => (<Card key={property.id}  property={property}/>))
            }
            </div>
        </div>
    );
};

export default PropertiesCard;