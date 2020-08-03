import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home">
        <div className="home__header">
          <span className="home__header-logo">Señor Tutor</span>
          <div className="home__header-sections">
            <span className="home__header-tag">Cursos</span>
            <span className="home__header-tag">Youtube</span>
          </div>
          <div className="home__header-login">
            <span className="home__header-tag">Ingresar</span>
            <span className="home__header-tag  home__header-tag--register">
              Registrarse
            </span>
          </div>
        </div>

        <div className="home__main">
          <div className="home__main-content">
            <h1 className="home__main-content-title">Atrévete a ser mejor</h1>
            <span className="home__main-content-description">
              Hay muchos caminos para el éxito estudiantil y nosotros somos uno
              de ellos.
            </span>
            <span className="home__main-content-subdescription">
              - Omar Fajardo
            </span>
            <span className="home__main-content-link">ver cursos</span>
          </div>

          <div className="home__main-images">
            <div className="home__main-images-frame" />
            <img
              className="home__main-images-photo"
              src="/images/tutor.png"
              alt="tutor"
            />
            <div className="home__main-images-tag">
              <span className="home__main-images-tag-text">Señor Tutor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
