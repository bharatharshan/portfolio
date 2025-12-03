import React from "react";

const Leadership = () => {
  const roles = [
    { title: "Hospitality In-Charge - Xebit (Department Exhibition)", year: "2024", org: "Christ University, Karnataka", cover: "/assets/hospitality.jpeg", alt: "Hospitality In\u2011Charge" },
    { title: "Cultural Head – Revelations (Department IT Fest)", year: "2025", org: "Christ University, Karnataka", cover: "/assets/culturals.jpeg" },
    { title: "Core Committee – Xebit (Department Exhibition)", year: "2025", org: "Christ University, Karnataka", cover: "/assets/xebit.jpeg" }
  ];

  return (
    <div className="leadership" aria-label="Leadership Experience">
      <div className="container">
        <div className="section__card">
          <h2 className="section__title" data-reveal>Leadership</h2>
          <div className="cards__row" data-reveal>
            {roles.map((r, idx) => (
              <article key={idx} className="project__card" aria-label={`Leadership role ${idx+1}`}>
                {r.cover ? (
                  <figure className="card__media">
                    <img src={r.cover} alt={r.alt || `${r.title} illustration`} loading="lazy" />
                  </figure>
                ) : null}
                <div className="project__content">
                  <h3>{r.title}</h3>
                  <p className="project__desc"><strong>{r.year}</strong></p>
                  <p className="project__desc"><em>{r.org}</em></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;