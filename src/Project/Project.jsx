import React from 'react';
import './style.css';
import '../style.css';
import coin from './img/coin.svg';
import hands from './img/hands.svg';

const Project = () => {
  return (
    <div className="container__project">
      <div className="project__name">Dobročinné aukce</div>
      <div className="project__description">
        <p>Webová platforma určená pro online dobročinné aukce.</p>
        <img className="project__icon" src={coin} />
        <img className="project__icon" src={hands} />
        <p>
          Dobročinných sbírek jsme viděly mnoho, také uměleckých aukčních domů a
          aukčních portálů, a tak jsme tyto dvě činnosti spojily. Chyběl nám
          aukční web, jenž by spojoval příjemné s užitečným: někdo má hodně a
          nestrádá, když daruje. Někdo si rád udělá radost a zároveň radost
          přinese někomu, kdo to opravdu potřebuje.
          <br />
          <br />
          Po skončení akademie bychom web rády nadále rozvíjely a nabídly
          charitativní neziskové organizaci, která by jej využívala pro pořádání
          vlastních aukcí.
        </p>
      </div>
    </div>
  );
};

export default Project;
