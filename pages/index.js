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
      </div>
    </div>
  );
}
