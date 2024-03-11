import React from "react";
import ArrowUp from "../assets/arrowup.png";

const AboutList = () => {
    return (
        <div id="list__container">
            <ul id="list">
                <div className="list__item--container">
                <li className="list__item">Fiabilité</li>
                <img className="arrowup" src={ArrowUp} alt="arrowup"/>
                </div>

                <div className="list__item--container">
                <li className="list__item" >Respect</li>
                <img className="arrowup" src={ArrowUp} alt="arrowup"/>
                </div>

                <div className="list__item--container">
                <li className="list__item">Service</li>
                <img className="arrowup" src={ArrowUp} alt="arrowup"/>
                </div>

                <div className="list__item--container">
                <li className="list__item">Sécurité</li>
                <img className="arrowup" src={ArrowUp} alt="arrowup"/>
                </div>
            </ul>
        </div>
       
    );
    }
export default AboutList;