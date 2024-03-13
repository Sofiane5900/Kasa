// Importez les composants nécessaires de React et React Router DOM
import React from "react";
import locations from "../locations.json";
import { NavLink } from "react-router-dom";

// Composant de la page des cartes
const Cards = () => {
  return (
    <section id="location__cards--container">
      {locations.map((location, index) => (
        <div className="location__cards" key={index}>
          <NavLink className={NavLink} to={`/locations/${location.id}`}>
            <p className="location__cards--text">{location.title}</p>
            <img className="location__cards--img" src={location.cover} alt={location.title} />
          </NavLink>
        </div>
      ))}
    </section>
  );
};

export default Cards;