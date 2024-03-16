import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-box">
        <p className="about-me-description">
          Meu nome é Lucas Alves, sou estudante do curso de Análise e Desenvolvimento de Sistemas (ADS) da Universidade Tiradentes (Unit). Atualmente, estou no quinto período, seguindo a modalidade de Ensino à Distância (EAD). 
        </p>
        <p className="about-me-description">
          Sou uma pessoa tranquila, mas também que gosta muito de desafios. Então, busco sempre estar me atuanlizando para estar preaprado aos mais diferentes tipos de cenários que podemos encontrar no mundo da tecnologia, que são inúmeros.
        </p>
        <p className="about-me-description">
          Meu ponto mais forte é o trabalho em equipe, gosto de discutir ideias para encontrar a melhor solução possível para os projetos que estou inserido. Além disso, acredito ser muito proveitoso quando temos um espaço para ensinar e aprender no ambiente de trabalho.
        </p>
        <p className="about-me-description">
          As tecnologias que mais trabalho no dia a dia são HTML, CSS, Javascript, React, NodeJS, NestJS, MySQL e Postgres.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
