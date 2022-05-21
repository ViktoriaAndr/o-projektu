import React from 'react';
import viktoria from './img/viktoria.png';
import zuzana from './img/zuzana.jpg';
import instagram from './icons/instagram.svg';
import github from './icons/github.svg';
import email from './icons/email.svg';

import './style.css';

const Authors = () => {
  return (
    <div className="container__authors">
      <div className="container__authors--cards">
        <div className="container__author--card">
          <h2>
            Viktória
            <br />
            Andraščíková
          </h2>
          <img className="photo" src={viktoria} alt="fotka Viktória" />{' '}
          <div className="socials">
            <p>
              {' '}
              <img className="icon" src={instagram} alt="instagram ikona" />
              <a
                href="https://www.instagram.com/viktoradelaville/"
                target="_blank"
              >
                viktoradelaville
              </a>
            </p>

            <p>
              {' '}
              <img className="icon" src={email} alt="email ikona" />
              <a href="mailto:viktoria.andrascikova@gmail.com">
                viktoria.andrascikova@gmail.com
              </a>
            </p>

            <p>
              {' '}
              <img className="icon" src={github} alt="github ikona" />
              <a href="https://github.com/ViktoriaAndr" target="_blank">
                ViktoriaAndr
              </a>
            </p>
          </div>
          <p className="card__description">
            Viktória pracuje v Saas firme na podpore a rieši požiadavky klientov
            z celého sveta. Rada by sa kariérne posunula do front-endu.
            <br />
            Okrem programovacích jazykov sa rada zaoberá francúzštinou.
            <br />
            Jej obľúbená forma relaxu je piknik v parku s príjemnou spoločnosťou
            a dobrou knihou.{' '}
          </p>
        </div>

        <div className="container__author--card">
          <h2>
            Zuzana
            <br />
            Červínová
          </h2>
          <img className="photo" src={zuzana} alt="fotka Zuzana" />{' '}
          <div className="socials">
            <p>
              {' '}
              <img className="icon" src={instagram} alt="instagram ikona" />
              <a href="https://www.instagram.com/nazuzunana/" target="_blank">
                nazuzunana
              </a>
            </p>

            <p>
              {' '}
              <img className="icon" src={email} alt="email ikona" />
              <a href="mailto:zuzankacervinova@gmail.com">
                zuzankacervinova@gmail.com
              </a>
            </p>

            <p>
              {' '}
              <img className="icon" src={github} alt="github ikona" />
              <a href="https://github.com/nazuzunana" target="_blank">
                nazuzunana
              </a>
            </p>
          </div>
          <p className="card__description">
            Zuzana pracuje na pozici Arts Manager v aukčním domě, kde se věnuje
            především organizaci online uměleckých aukcí.
            <br />
            <br /> Po dokončení Digitální akademie by se ráda dále rozvíjela v
            oboru a uplatnila se jako junior front-end web developer. <br />
            <br />
            Píše krátké básničky na{' '}
            <a href="https://nazuzunana.com/" target="_blank">
              nazuzunana.com
            </a>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authors;
