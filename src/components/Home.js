import React from 'react';
import './Home.css';
import myPhoto from '../images/Lucas-tarde-de-sol.jpg';

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-message">Apresentação de Portfólio</h1>
      <img src={myPhoto} alt="Minha Foto" className="my-photo" style={{ marginTop: '20px' }} />
      <div className="additional-info">
        <p>Nome: Lucas Alves Batista Santos</p>
        <p>Data de Nascimento: 11/07/1994</p>
        <p>Número de Telefone: (79) 98805-6516</p>
      </div>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/lucas-alves-090524225/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a> |{' '}
        <a href="https://github.com/LucasAlvesBS" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
      </footer>
    </div>
  );
}

export default Home;
