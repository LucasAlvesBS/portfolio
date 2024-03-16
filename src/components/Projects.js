import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <div className="project-box">
        <h2 className="project-title">NFT Havaianas</h2>
        <p className="project-description">Criar um site que possibilitasse que os donos de NFTs da Havaianas resgatassem o seu kit prêmio por ter comprado o NFT. O projeto impactou cerca de 300 pessoas.</p>
        <p className="project-technologies">Tecnologias Usadas: Javascript, React, NodeJS, NestJS e Postgres</p>
      </div>
      <div className="project-box">
        <h2 className="project-title">Plugin de Horas</h2>
        <p className="project-description">Realizar manutenção do plugin de horas no Azure para os colaboradores da empresa ioasys, que possue cerca de 500 pessoas.</p>
        <p className="project-technologies">Tecnologias Usadas: SailsJS, Waterline e Postgres</p>
      </div>
      <div className="project-box">
        <h2 className="project-title">ADCT Obra</h2>
        <p className="project-description">Remover gargalos que faziam com que a aplicação levasse mais de cinco minutos para retornar os dados das notificações e também dos relatórios dos empreendimentos.</p>
        <p className="project-technologies">Tecnologias Usadas: AdonisJS, Sequelize e Postgres</p>
      </div>
       <div className="project-box">
        <h2 className="project-title">Exa</h2>
        <p className="project-description">Desenvolver uma aplicação para atender um aplicativo de monitoramento familiar.</p>
        <p className="project-technologies">Tecnologias Usadas: NodeJS, NestJS, Firebase e Firestore</p>
      </div>
    </div>
  );
}

export default Projects;
