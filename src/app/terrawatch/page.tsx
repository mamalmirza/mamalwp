import React from 'react';

export default function Terrawatch() {
  return (
    <>
      {/* Grain Container */}
      <div id="grain" className="grain-container"></div>

      {/* Navigation */}
      <div
        data-collapse="small"
        data-animation="default"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar"
      >
        <div className="nav-container">
          <a href="/" aria-current="page" className="logo" aria-label="home">
            <div className="name-text">Mohammad Reza Mirzaei</div>
          </a>
          <nav role="navigation" className="nav-menu">
            <div className="nav-div-left">
              <div className="nav-text">Projects</div>
              <a href="/terrawatch" className="nav-text link">
                / TERRAWATCH
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section - Centered */}
        <section className="hero-wrapper-center">
            <div className="hero-div-center">
                    <h1 className="hero-text">Coming Soon ...</h1>
            </div>
        </section>


      
    </>
  );
}
