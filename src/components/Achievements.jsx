import React from "react";

const Achievements = () => {
  const items = [
    { text: "Second Place in Kerala State Wushu Championship, 2021", cover: "/assets/wushu2.jpeg", alt: "Wushu second place" },
    { text: "Second Place in Shells Arena Event held at Kristu jayanthi College, 2025", cover: "/assets/shellssecond2.jpeg", alt: "Shells second place" },
    { text: "Second place in Group Dance, Blossoms Intra-Deanery Fest, 2024, Christ University, Karnataka", cover: "/assets/blossoms.jpeg" }
  ];
  return (
    <div className="achievements" aria-label="Achievements">
      <div className="container">
        <div className="section__card">
          <h2 className="section__title" data-reveal>Achievements</h2>
          <div className="projects__grid" data-reveal>
            {items.map((item, idx) => (
              <article key={idx} className="project__card" aria-label={`Achievement ${idx+1}`}>
                {item.cover ? (
                  <figure className="card__media">
                    <img src={item.cover} alt={item.alt || "Achievement illustration"} loading="lazy" />
                  </figure>
                ) : null}
                <div className="project__content">
                  <p className="project__desc">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;