import React from 'react';

const Home = () => (
  <div className="home">
    <div className="home__header">
      <span className="home__header-logo">Señor Tutor</span>
      <div className="home__header-sections">
        <span className="home__header-tag">CURSOS</span>
        <span className="home__header-tag">YOUTUBE</span>
      </div>
      <div className="home__header-login">
        <span className="home__header-tag">INGRESAR</span>
        <span className="home__header-tag  home__header-tag--register">
          REGISTRARSE
        </span>
      </div>
    </div>
  </div>
);

export default Home;
