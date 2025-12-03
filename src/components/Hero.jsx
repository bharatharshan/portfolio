import React from "react";

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero__content" aria-label="Introduction">
      <div className="container">
        <div className="hero__card hero__grid">
          <div className="hero__text" data-reveal>
            <h1 className="hero__title">
              Hi, I'm <span className="text-gradient">Bharat Harshan</span>
            </h1>
            <p className="hero__subtitle">
              I am a full-stack developer skilled in React, Angular, Django, and Express.js, with experience building user-friendly and scalable web applications.
            </p>
            <div className="hero__actions">
              <button className="btn btn--primary" onClick={() => scrollTo("projects")}>
                View Projects
              </button>
              <button className="btn btn--primary" onClick={() => scrollTo("skills")}>
                Explore Skills
              </button>
            </div>
            <div className="hero__socials" aria-label="Social links">
              <a className="hero__social-link" href="https://www.linkedin.com/in/bharat-harshan/" target="_blank" rel="noopener noreferrer">
                <img className="hero__social-icon" src="/assets/Linkedin-logo-on-transparent-PNG-.png" alt="LinkedIn" width="28" height="28" />
              </a>
              <a className="hero__social-link" href="https://github.com/bharatharshan" target="_blank" rel="noopener noreferrer">
                <img className="hero__social-icon" src="/assets/GitHublogo.png" alt="GitHub" width="28" height="28" />
              </a>
              <a className="hero__social-link" href="https://www.instagram.com/__bharat_harshan__/" target="_blank" rel="noopener noreferrer">
                <img className="hero__social-icon" src="/assets/instagramlogo.jpg" alt="Instagram" width="28" height="28" />
              </a>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true" data-reveal>
            <div className="hero__orb orb--accent" />
            <div className="hero__orb orb--secondary" />
            <div className="hero__profile">
              <img className="profile__img" src="/assets/linkedin.jpeg" alt="Profile picture of Bharat Harshan" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;