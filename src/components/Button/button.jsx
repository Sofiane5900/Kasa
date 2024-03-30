import React, { useState } from 'react';
import ArrowUp from "../../assets/arrowup.png"
import "./button.css";


const Button = ({ buttonText, onClick, arrowRotation, content }) => {
    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => { 
        setShowContent(!showContent);
        if (onClick) {
            onClick();
        }
    };

    return ( 
        <div className='infos__btn--container'>
            <button type="button" className="infos__button" onClick={toggleContent}>
                {buttonText}
            </button>
            <div className={`infos__collapse ${showContent ? 'infos__collapse--expanded' : ''}`}>
                {content}
            </div>
            <div className="infos__arrow">
                <img className={`description_arrow ${arrowRotation ? 'rotate' : ''}`} src={ArrowUp} alt="arrowup" onClick={toggleContent} />
            </div>
        </div>
    );
};

export default Button;
