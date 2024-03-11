import React from 'react';
import backgroundHeader from '../assets/header_background.jfif';

const Header = () => {
  return (
    <header>
      <img id="header__img" src={backgroundHeader} alt="background"/>
      <div>
        <h1 id="header__title">Chez vous, partout et ailleurs</h1>
      </div>
    </header>
  );
}

export default Header;