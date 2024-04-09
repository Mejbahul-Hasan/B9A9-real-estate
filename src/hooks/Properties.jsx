import { useEffect, useState } from "react";

const Properties = () => {

    const [properties, setProperties] = useState([]);

    useEffect(()=>{
        fetch('../residential.json')
        .then(res=>res.json())
        .then(data=>setProperties(data))
    },[])

    return {properties};
};

export default Properties;