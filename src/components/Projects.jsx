import React from "react";
import projects from "../data/projects.js";

const Projects = () => {

  return (
    <div className="projects" aria-label="Portfolio projects">
      <div className="container">
        <div className="section__card">
          <h2 className="section__title" data-reveal>Projects</h2>
          <div className="projects__grid" data-reveal>
          {projects.map((p) => (
            <article key={p.title} className="project__card" aria-labelledby={`title-${p.slug}`}>
                <div className="project__media" aria-label={`${p.title} image`}>
                  <img src={p.cover} alt={p.slug === "grocymart" ? "GrocyMart screenshot" : `${p.title} cover`} loading="lazy" width="560" height="320" />
                </div>
              <div className="project__content">
                <h3 id={`title-${p.slug}`}>{p.title}</h3>
                  {Array.isArray(p.tags) && p.tags.length > 0 && (
                    <ul className="project__tags" aria-label="Technologies">
                      {p.tags.map((t) => (
                        <li key={t} className="tag">
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
            </article>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;