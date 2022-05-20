import React from 'react';
import './style.css';

const Project = () => {
  return (
    <div className="container__project">
      <h2>Dobročinné aukce</h2>
      <div className="container__project--description">
        <p>
          Webová platforma určená pro online dobročinné aukce.
          <br />
          <br />
          Po skončení akademie bychom web rády nadále rozvíjely a nabídly
          charitativní neziskové organizaci, která by jej využívala pro pořádání
          vlastních aukcí.
          <br />
          <br />
          Dobročinných sbírek jsme viděly mnoho, také uměleckých aukčních domů a
          aukčních portálů, a tak jsme tyto dvě činnosti spojily. Chyběl nám
          aukční web, jenž by spojoval příjemné s užitečným: někdo má hodně a
          nestrádá, když daruje. Někdo si rád udělá radost a zároveň radost
          přinese někomu, kdo to opravdu potřebuje.
        </p>
      </div>
    </div>
  );
};

export default Project;
