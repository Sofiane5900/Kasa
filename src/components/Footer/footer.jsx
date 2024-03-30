import React from "react";
import logoKasaWhite from '../../assets/logo_kasa_white.png';
import "./footer.css";


const Footer = () => {
    return (
        <footer>
        <div>
        <img id="footer__img" src={logoKasaWhite} alt="logo"/>
        <div>
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </div>
        </div>
        </footer>
    );
    }

export default Footer;
    