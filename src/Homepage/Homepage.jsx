import React from 'react';
import './style.css';
import hammer from './img/hammer.png';
import Authors from '../Authors/Authors';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="container__homepage">
      <h2>Dobročinné aukce</h2>
      <Link to="/Project">
        <img
          className="hammer__image"
          src={hammer}
          alt="obrázek aukčního kladívka"
        />
      </Link>{' '}
    </div>
  );
};

export default Homepage;
