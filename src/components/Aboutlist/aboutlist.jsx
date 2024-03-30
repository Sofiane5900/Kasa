import React, { useState } from "react";
import "./aboutlist.css";
import Button from '../Button/button.jsx'; // Import the Button component

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
        <Button
          buttonText="Fiabilité"
          onClick={() => toggleDescription(0)}
          arrowRotation={openDescriptions[0]}
          content={
            openDescriptions[0] && (
              <div className="description">
                <p>
                  Les annonces postées sur Kasa garantissent une fiabilité
                  totale. Les photos sont conformes aux logements, et toutes
                  les informations sont régulièrement vérifiées par nos
                  équipes.
                </p>
              </div>
            )
          }
        />
        <Button
          buttonText="Respect"
          onClick={() => toggleDescription(1)}
          arrowRotation={openDescriptions[1]}
          content={
            openDescriptions[1] && (
              <div className="description">
                <p>
                  La bienveillance fait partie des valeurs fondatrices de
                  Kasa. Tout comportement discriminatoire ou de perturbation
                  du voisinage entraînera une exclusion de notre plateforme.
                </p>
              </div>
            )
          }
        />
        <Button
          buttonText="Service"
          onClick={() => toggleDescription(2)}
          arrowRotation={openDescriptions[2]}
          content={
            openDescriptions[2] && (
              <div className="description">
                <p>
                  Nos équipes se tiennent à votre disposition pour vous
                  fournir une expérience parfaite. N'hésitez pas à nous
                  contacter si vous avez la moindre question.
                </p>
              </div>
            )
          }
        />
        <Button
          buttonText="Sécurité"
          onClick={() => toggleDescription(3)}
          arrowRotation={openDescriptions[3]}
          content={
            openDescriptions[3] && (
              <div className="description">
                <p>
                  La sécurité est la priorité de Kasa. Aussi bien pour nos
                  hôtes que pour les voyageurs, chaque logement correspond
                  aux critères de sécurité établis par nos services. En
                  laissant une note aussi bien à l'hôte qu'au locataire, cela
                  permet à nos équipes de vérifier que les standards sont
                  bien respectés. Nous organisons également des ateliers sur
                  la sécurité domestique pour nos hôtes.
                </p>
              </div>
            )
          }
        />
      </ul>
    </div>
  );
};

export default AboutList;
