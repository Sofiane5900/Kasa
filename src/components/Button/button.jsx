import React, { useState, useEffect } from 'react';
import ArrowUp from "../../assets/arrowup.png"
import "./button.css";

const Button = ({ buttonText, onClick, content, customStyle }) => {
    const [showContent, setShowContent] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleContent = () => { 
        setShowContent(!showContent);
        setArrowRotation(!arrowRotation); // Toggle the arrow rotation state
        if (onClick) {
            onClick();
        }
    };

    const shouldApplyCustomStyle = screenWidth > 768; // Adjust this threshold as needed

    return ( 
        <div className='infos__btn--container'>
            <button type="button" className="infos__button" onClick={toggleContent} style={shouldApplyCustomStyle ? customStyle : null}>
                {buttonText}
                <div className="infos__arrow--container">
                    <img className={`infos__arrow ${arrowRotation ? 'rotate' : ''}`} src={ArrowUp} alt="arrowup" />
                </div>
            </button>
            <div className={`infos__collapse ${showContent ? 'infos__collapse--expanded' : ''}`}>
                {content}
            </div>
        </div>
    );
};

export default Button;
