import React from 'react';
import StarFilled from '../assets/star-filled.png'; 
import StarEmpty from '../assets/star-empty.png'; 
import locations from '../locations.json';
import { useParams } from 'react-router-dom';
import "../Locations.css";

const RatingStars = () => {
    const { id } = useParams();
    const location = locations.find(location => location.id === id);
    
    if (!location || !location.rating) {
        return null; // Return null if location is not found or if rating is not available
    }

    const rating = parseInt(location.rating); // Convert rating to integer

    const starArray = [];

    for (let i = 1; i <= 5; i++) {
        const starSrc = i <= rating ? StarFilled : StarEmpty;
        starArray.push(<img key={i} src={starSrc} alt="star" className="star" />);
    }

    return (
        <div className="rating__stars">
            {starArray}
        </div>
    );
};

export default RatingStars;
