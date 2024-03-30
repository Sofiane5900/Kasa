import React from 'react';
import AboutBackground from '../../assets/about_header.jfif';

const AboutHeader = () => {
  return (
    <header>
      <img id="header__img" src={AboutBackground} alt="background"/>
    </header>
  );
}

export default AboutHeader;