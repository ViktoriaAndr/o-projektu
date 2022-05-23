import React from 'react';
import './style.css';
import '../style.css';
import hammer from './img/hammer.png';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="container__homepage">
      <div className="homepage__title">Dobročinné aukce</div>
      <Link to="/Project">
        <img
          className="homepage__icon"
          src={hammer}
          alt="obrázek aukčního kladívka"
        />
      </Link>{' '}
    </div>
  );
};

export default Homepage;
