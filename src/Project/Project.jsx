import React from 'react';
import './style.css';
import coin from './img/coin.svg';
import hands from './img/hands.svg';

const Project = () => {
  return (
    <div className="container__project">
      <h2>Dobročinné aukce</h2>
      <div className="container__project--description">
        <p>Webová platforma určená pro online dobročinné aukce.</p>
        <img className="coin" src={coin} />
        <img className="hands" src={hands} />
        <p>
          Dobročinných sbírek jsme viděly mnoho, také uměleckých aukčních domů a
          aukčních portálů, a tak jsme tyto dvě činnosti spojily. Chyběl nám
          aukční web, jenž by spojoval příjemné s užitečným: někdo má hodně a
          nestrádá, když daruje. Někdo si rád udělá radost a zároveň radost
          přinese někomu, kdo to opravdu potřebuje.
          <br />
          <br />
          <br />
          Po skončení akademie bychom web rády nadále rozvíjely a nabídly
          charitativní neziskové organizaci, která by jej využívala pro pořádání
          vlastních aukcí.
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Project;
