import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-box">
        <div className="experience">
          <h2 className="experience-title">Estagiário em Desenvolvimento de Sistemas</h2>
          <p className="experience-company">Empresa: Ioasys</p>
          <p className="experience-period">Junho/2022 - Janeiro/2024</p>
        </div>
      </div>
      <div className="experience-box">
        <div className="experience">
          <h2 className="experience-title">Desenvolvedor de Sistemas I</h2>
          <p className="experience-company">Empresa: Ioasys</p>
          <p className="experience-period">Fevereiro/2024 - Atual</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
