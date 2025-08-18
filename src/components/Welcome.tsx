import React from 'react'

export default function Welcome() {
  return (
    <>
      {/* Grain Container */}
      <div id="grain" className="grain-container"></div>
      
      {/* Navigation */}
      <div data-collapse="small" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar">
        <div className="nav-container">
          <a href="/" aria-current="page" className="logo" aria-label="home">
            <div className="name-text">Mohammad Reza Mirzaei</div>
          </a>
          <nav role="navigation" className="nav-menu">
            <div className="nav-div-left">
              <div className="nav-text">Projects</div>
              <a href="/terrawatch" className="nav-text link">/ TERRAWATCH</a>
              {/* <a href="/arena-club" className="nav-text link">/ ARENA CLUB</a>
              <a href="/trackr" className="nav-text link last">/ TRACKR</a> */}
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-div">
          <h1 className="hero-text">The Projects &</h1>
          <h1 className="hero-text">Ideas of Me</h1>
        </div>
      </section>

     

      {/* Selected Work Section */}
      <section className="selected-work-section">
        <div className="selected-work-div">
          {/* Case Study 01 - Surfline */}
          <div className="selected-work-wrapper">
            <div className="selected-work-column">
              <div className="column-1">
                <div className="selected-work-heading-div">
                  <h5 className="heading-2">● PROJECT 01</h5>
                </div>
                <div className="selected-work-info-div">
                  <h1>Terrawatch</h1>
                  <div className="selected-work-info-text">
                  A forest monitoring web application that uses interactive maps and satellite data to track forest health, detect deforestation, and provide clear visual insights for sustainable decision-making
                  </div>
                  <a href="/surfline" className="selected-work-button">Take a look</a>
                </div>
              </div>
              <div className="column-2">
                <a href="/surfline" className="link-block link-block-surfline"></a>
              </div>
            </div>
          </div>

          {/* Case Study 02 - Arena Club */}
          {/* <div className="selected-work-wrapper">
            <div className="selected-work-column">
              <div className="column-1">
                <div className="selected-work-heading-div">
                  <h5 className="heading-2">● CASE STUDY 02</h5>
                </div>
                <div className="selected-work-info-div">
                  <h1>Arena Club</h1>
                  <div className="selected-work-info-text">
                    Arena Club is an innovative digital platform tailored for sports card collectors, providing an interactive space for enthusiasts to showcase their prized collections
                  </div>
                  <a href="/arena-club" className="selected-work-button">VIEW CASE STUDY</a>
                </div>
              </div>
              <div className="column-2">
                <a href="/arena-club" className="link-block link-block-arena-club"></a>
              </div>
            </div>
          </div> */}

          {/* Case Study 03 - TrackR */}
          {/* <div className="selected-work-wrapper">
            <div className="selected-work-column">
              <div className="column-1">
                <div className="selected-work-heading-div">
                  <h5 className="heading-2">● CASE STUDY 03</h5>
                </div>
                <div className="selected-work-info-div">
                  <h1>TrackR</h1>
                  <div className="selected-work-info-text">
                    Web redesign, app design, packaging design and more for a device used to find your lost stuff
                  </div>
                  <a href="/trackr" className="selected-work-button">VIEW CASE STUDY</a>
                </div>
              </div>
              <div className="column-2">
                <a href="/trackr" className="link-block link-block-trackr"></a>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section className="about-container">
        <div className="about-div">
          <div className="header-div full-width">
            <h5 className="heading-2">● ABOUT</h5>
          </div>
          <div className="about-content-div">
            <div className="pfp-div">
              <img 
                src="https://cdn.prod.website-files.com/64daf5c0c154912f54a34b6e/64db0023bf49c009ffe8fad8_ReefWalk.png" 
                loading="lazy" 
                alt="Dan Machado and child walking on wooden boardwalk surrounded by trees and sandy dunes" 
                className="pfp-img"
              />
            </div>
            <div className="about-text-div">
              <p className="about-text">
                Father of two, lover of pixel art, web3 enthusiast, amateur pizza maker<br /><br />
                16+ years of experience designing stuff for screens. A strong, structured, efficient, detail- and impact-oriented digital designer, with focus on UI/UX design.<br /><br />
                Based in Orange County, California
              </p>
            </div>
          </div>
        </div>
      </section>

      

   

      {/* Footer */}
      <div className="footer-container">
        <div className="footer-contact-div">

          <a href="mailto:mirzaei.mohammadreza1997@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link-block">
            <div className="social-link">Email</div>
          </a>


          <a href="https://www.linkedin.com/in/mohammad-reza-mirzaei-masc-a9a2b213b" target="_blank" rel="noopener noreferrer" className="footer-link-block">
            <div className="social-link">LinkedIn</div>
          </a>
          
          <a href="https://github.com/mamalmirza" target="_blank" rel="noopener noreferrer" className="footer-link-block last">
            <div className="social-link">Github</div>
          </a>
        </div>
      </div>
    </>
  )
}
