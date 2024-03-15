/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import locations from "../locations.json";
import "../Locations.css";
import Error from "./error";
import ArrowLeft from '../assets/arrow-left.png';
import ArrowRight from '../assets/arrow-right.png';

const Slider = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to get location by ID
  const getLocationById = (id) => {
    return locations.find(location => location.id === id);
  };

  const location = getLocationById(id);

  // Check if location is found
  if (!location) {
    return <div><Error /></div>;
  }

  const totalImages = location.pictures.length;

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  return (
    <div id="slider__container">
      <div className="slider__counter">{currentImageIndex + 1} / {totalImages}</div>
      <button onClick={prevSlide} className="arrow__left">
        <img src={ArrowLeft} alt="Previous" />
      </button>
      <div className="slider__pictures">
        {location.pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Location ${location.id} Picture ${index}`}
            style={{
              display: index === currentImageIndex ? "block" : "none"
            }}
          />
        ))}
      </div>
      <button onClick={nextSlide} className="arrow__right">
        <img src={ArrowRight} alt="Next" />
      </button>
    </div>
  );
};

export default Slider;
