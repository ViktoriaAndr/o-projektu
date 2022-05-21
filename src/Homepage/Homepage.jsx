import React from 'react';
import './style.css';
import hammer from './img/hammer.png';
import Authors from '../Authors/Authors';

const Homepage = () => {
  return (
    <div className="container__homepage">
      <h2>Dobročinné aukce</h2>
      <img
        className="hammer__image"
        onClick={() => {
          <Authors />;
        }}
        src={hammer}
        alt="obrázek kladiva"
      />{' '}
    </div>
  );
};

export default Homepage;
