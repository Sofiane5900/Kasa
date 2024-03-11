import React from "react";
import locations from "../locations.json";

const Cards = () => {
  return (
    <section id="location__cards--container">
      {locations.map((location, index) => (
        <div className="location__cards" key={index}>
          <p className="location__cards--text">{location.title}</p>
  
          <img className="location__cards--img" src={location.cover} alt={location.title} />
        </div>
      ))}
    </section>
  );
};

export default Cards;