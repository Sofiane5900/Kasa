import React from 'react';
import { useParams } from "react-router-dom";
import locations from "../locations.json";
import "../Locations.css";


const Informations = () => {
    
    const { id } = useParams();

    // Function to get location by ID
    const getLocationById = (id) => {
        return locations.find(location => location.id === id);
    };

    const location = getLocationById(id);

    if (!location) {
        return <div>Location not found</div>;
    }

    return (
        <div className="infos__container">
            <h1 className="infos__title">{location.title}</h1>
            <p className="infos__location">{location.location}</p>
            <ul className="infos__tags">
                {location.tags.map((tag, index) => (
                    <li className="infos__tags--items" key={index}>{tag}</li>
                ))}
            </ul>
            <div className="infos__host">
                <p className="infos__host--name">{location.host.name}</p>
                <img src={location.host.picture} alt="Host" className="infos__host--picture" />
                <p className="infos__rating">{location.rating}</p>      


            </div>
        </div>
    );
};

export default Informations;
