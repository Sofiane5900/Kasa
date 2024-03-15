import React, { useState } from 'react';
import locations from "../locations.json";
import "../Locations.css";

// Define InfosComponent outside of Informations component
const ButtonsInfos = ({ location }) => {
    const [showDescription, setShowDescription] = useState(false);
    const [showEquipments, setShowEquipments] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const toggleEquipments = () => {
        setShowEquipments(!showEquipments);
    };

    return (
        <div className="infos__container">
            <button type="button" className="infos__button" onClick={toggleDescription}>
                Description
            </button>
            {showDescription && (
                <p className="infos__button--text">{location.description}</p>
            )}
            <button type="button" className="infos__button" onClick={toggleEquipments}>
                Equipments
            </button>
            {showEquipments && (
                <div>
                    <h2>Equipments</h2>
                    <ul>
                        {location.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ButtonsInfos;