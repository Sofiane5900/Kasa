import React from "react";
import "./error.css";


const Error = () => {
    return (
        <div id="error__container">
        <h1 id="error__title">404</h1>
        <p id="error__message">Oups! La page que vous demandez n'existe pas.</p>
        <a href="/" id="error__link">Retourner sur la page d'accueil</a>
        </div>
    );
    
}

export default Error;