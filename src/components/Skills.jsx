import React from "react";

const skills = [
  { key: "react", name: "React", level: "Advanced", blurb: "Hooks, state, performance", iconSrc: "/assets/react.png" },
  { key: "django", name: "Django", level: "Proficient", blurb: "REST APIs, ORM, auth", iconSrc: "/assets/django.png" },
  { key: "python", name: "Python", level: "Proficient", blurb: "Scripting, data handling, APIs", iconSrc: "/assets/pythonlogo.jpg" },
  { key: "mysql", name: "MySQL", level: "Proficient", blurb: "Schema design, queries, joins", iconSrc: "/assets/mysql.png" },
  { key: "mongodb", name: "MongoDB", level: "Proficient", blurb: "Documents, aggregation", iconSrc: "/assets/mongo.png" },
  { key: "firebase", name: "Firebase", level: "Proficient", blurb: "Auth, Firestore, hosting", iconSrc: "/assets/firebase.png" },
  { key: "js", name: "JavaScript", level: "Advanced", blurb: "ES6+, async patterns", iconSrc: "/assets/javascript.png" },
  { key: "css", name: "CSS3", level: "Advanced", blurb: "Responsive design, Flex/Grid", iconSrc: "/assets/css.png" },
  { key: "html", name: "HTML5", level: "Advanced", blurb: "Semantic markup & accessibility", iconSrc: "/assets/htmll.png" },
  { key: "angular", name: "Angular", level: "Proficient", blurb: "Components, services, routing", iconSrc: "/assets/icons8-angularjs-48.png" }
];



const Skills = () => {
  return (
    <div className="skills" aria-label="Technical skills">
      <div className="container">
        <div className="section__card">
          <h2 className="section__title" data-reveal><img className="section__title-icon" src="/assets/skills.svg" alt="" aria-hidden="true" />Technical Skills</h2>
          <div className="skills__grid" data-reveal>
          {skills.map((s) => (
            <article key={s.key} className="skill__card" aria-label={s.name}>
              <div className="skill__icon" aria-hidden="true"><img src={s.iconSrc} alt={s.key === "mysql" ? "MySQL" : s.key === "html" ? "HTML" : `${s.name} logo`} /></div>
              <div className="skill__content">
                <h3 className="skill__name">{s.name}</h3>
                <p className="skill__meta">{s.level}</p>
                <p className="skill__blurb">{s.blurb}</p>
              </div>
            </article>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;