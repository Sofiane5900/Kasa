import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import locations from "../locations.json";
import "../Locations.css";
import ArrowUp from "../assets/arrowup.png";
import RatingStars from './ratingstars.jsx'; // Import the RatingStars component

const InfosComponent = ({ location }) => {
    const [showDescription, setShowDescription] = useState(false);
    const [showEquipments, setShowEquipments] = useState(false);
    const [arrowRotationDescription, setArrowRotationDescription] = useState(false);
    const [arrowRotationEquipments, setArrowRotationEquipments] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
        setArrowRotationDescription(!arrowRotationDescription);
    };

    const toggleEquipments = () => {
        setShowEquipments(!showEquipments);
        setArrowRotationEquipments(!arrowRotationEquipments);
    };

    return (
        <div className='infos__description--container'>
            <div className="infos__btn--container">
                <button type="button" className="infos__button" onClick={toggleDescription}>
                    Description
                </button>
                <div className="infos__arrow">
                    <img className={`arrow-up ${arrowRotationDescription ? 'rotate' : ''}`} src={ArrowUp} alt="arrowup" onClick={toggleDescription} />
                </div>
                <div className={`infos__collapse ${showDescription ? 'infos__collapse--expanded' : ''}`}>
                    <p className="infos__button--text">{location.description}</p>
                </div>
            </div>
            <div className="infos__btn--container">
                <button type="button" className="infos__button" onClick={toggleEquipments}>
                    Equipments
                </button>
                <div className="infos__arrow">
                    <img className={`arrow-up ${arrowRotationEquipments ? 'rotate' : ''}`} src={ArrowUp} alt="arrowup" onClick={toggleEquipments} />
                </div>
                <div className={`infos__collapse ${showEquipments ? 'infos__collapse--expanded' : ''}`}>
                    <ul className='infos__equipement--list'>
                        {location.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Informations = () => {
    const { id } = useParams();

    const getLocationById = (id) => {
        return locations.find(location => location.id === id);
    };

    const location = getLocationById(id);

    if (!location) {
        return <div>Location not found</div>;
    }

    return (
        <div className="infos__container">
            <div className="infos__location--container">
                <h1 className="infos__title">{location.title}</h1>
                <p className="infos__location">{location.location}</p>
                <ul className="infos__tags">
                    {location.tags.map((tag, index) => (
                        <li className="infos__tags--items" key={index}>{tag}</li>
                    ))}
                </ul>
            </div>

            <div className="infos__host">
                <p className="infos__host--name">{location.host.name}</p>
                <img src={location.host.picture} alt="Host" className="infos__host--picture" />
                <RatingStars rating={location.rating} /> {/* Replace the <p> element */}
            </div>

            <InfosComponent location={location} />
        </div>
    );
};

export default Informations;
