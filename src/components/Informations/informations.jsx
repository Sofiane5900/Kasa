import React from 'react';
import { useParams } from "react-router-dom";
import locations from "../../locations.json";
import "./informations.css";
import RatingStars from '../RatingStars/ratingstars.jsx';
import Button from '../Button/button.jsx';

const InfosComponent = ({ location }) => {
    return ( 
        <div className='infos__description--container'>
            <Button buttonText="Description" arrowRotation={false} content={<p className="infos__button--text">{location.description}</p>} />
            <Button buttonText="Equipments" arrowRotation={false} content={<ul className='infos__equipement--list'>{location.equipments.map((equipment, index) => (<li key={index}>{equipment}</li>))}</ul>} />
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
        return <div></div>;
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
