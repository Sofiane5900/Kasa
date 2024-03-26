import React, { useState } from "react";
import ArrowUp from "../assets/arrowup.png";
import "../About.css";

const AboutList = () => {
    const [openDescriptions, setOpenDescriptions] = useState(Array(4).fill(false));

    const toggleDescription = (index) => {
        const updatedOpenDescriptions = [...openDescriptions];
        updatedOpenDescriptions[index] = !updatedOpenDescriptions[index];
        setOpenDescriptions(updatedOpenDescriptions);
    };

    return (
        <div id="list__container">
            <ul id="list">
                <div className="list__item--container">
                    <li className="list__item" onClick={() => toggleDescription(0)}>
                        Fiabilité
                    </li>
                    <img className={`arrowup ${openDescriptions[0] ? 'rotate' : ''}`} src={ArrowUp} alt="arrowup" onClick={() => toggleDescription(0)} />
                </div>
                {openDescriptions[0] && (
                    <div className="description__container">
                        <div className="description">
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                                 et toutes les informations sont régulièrement vérifiées par nos équipes.
                            </p>
                        </div>
                    </div>
                )}

                <div className="list__item--container">
                    <li className="list__item" onClick={() => toggleDescription(1)}>
                        Respect
                    </li>
                    <img className={`arrowup ${openDescriptions[1] ? 'rotate' : ''}`} src={ArrowUp} alt="arrowup" onClick={() => toggleDescription(1)} />
                </div>
                {openDescriptions[1] && (
                    <div className="description__container">
                        <div className="description">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                            </p>
                        </div>
                    </div>
                )}

                <div className="list__item--container">
                    <li className="list__item" onClick={() => toggleDescription(2)}>
                        Service
                    </li>
                    <img className={`arrowup ${openDescriptions[2] ? 'rotate' : ''}`} src={ArrowUp} alt="arrowup" onClick={() => toggleDescription(2)} />
                </div>
                {openDescriptions[2] && (
                    <div className="description__container">
                        <div className="description">
                            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                                N'hésitez pas à nous contacter si vous avez la moindre question.
                            </p>
                        </div>
                    </div>
                )}

                <div className="list__item--container">
                    <li className="list__item" onClick={() => toggleDescription(3)}>
                        Sécurité
                    </li>
                    <img className={`arrowup ${openDescriptions[3] ? 'rotate' : ''}`} src={ArrowUp} alt="arrowup" onClick={() => toggleDescription(3)} />
                </div>
                {openDescriptions[3] && (
                    <div className="description__container">
                        <div className="description">
                            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                                chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, c
                                ela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique
                                 pour nos hôtes.
                            </p>
                        </div>
                    </div>
                )}
            </ul>
        </div>
    );
}

export default AboutList;