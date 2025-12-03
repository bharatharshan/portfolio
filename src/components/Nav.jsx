import React, { useState, useEffect, useRef } from "react";
const Nav = () => {
  const [active, setActive] = useState("");
  const navLinksRef = useRef(null);
  useEffect(() => {
    const ids = ["hero", "education", "skills", "projects", "leadership", "achievements"];
    const ratios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        let bestId = null;
        let bestRatio = -1;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        if (bestId) setActive(bestId);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "0px 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const fromHash = window.location.hash?.replace("#", "");
    if (fromHash && ids.includes(fromHash)) {
      setActive(fromHash);
    } else {
      const centerY = window.innerHeight / 2;
      const nearest = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .sort(
          (a, b) =>
            Math.abs((a.getBoundingClientRect().top + a.getBoundingClientRect().height / 2) - centerY) -
            Math.abs((b.getBoundingClientRect().top + b.getBoundingClientRect().height / 2) - centerY)
        )[0];
      if (nearest) setActive(nearest.id);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = navLinksRef.current?.querySelector(".nav__link.is-active");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }, [active]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="nav sidebar">
      <div className="nav__brand">
        <span className="nav__title">Bharat Harshan</span>
      </div>

      <nav className="nav__links" aria-label="Primary" ref={navLinksRef}>
        <button onClick={() => scrollTo("hero")} className={`nav__link${active === "hero" ? " is-active" : ""}`} aria-current={active === "hero" ? "page" : undefined}>
          <img src="/assets/home.svg" alt="Home" className="nav__icon" width="24" height="24" />
          <span>Home</span>
        </button>
        <button onClick={() => scrollTo("education")} className={`nav__link${active === "education" ? " is-active" : ""}`} aria-current={active === "education" ? "page" : undefined}>
          <img src="/assets/education.svg" alt="Education" className="nav__icon" width="24" height="24" />
          <span>Education</span>
        </button>
        <button onClick={() => scrollTo("skills")} className={`nav__link${active === "skills" ? " is-active" : ""}`} aria-current={active === "skills" ? "page" : undefined}>
          <img src="/assets/skills.svg" alt="Skills" className="nav__icon" width="24" height="24" />
          <span>Skills</span>
        </button>
        <button onClick={() => scrollTo("projects")} className={`nav__link${active === "projects" ? " is-active" : ""}`} aria-current={active === "projects" ? "page" : undefined}>
          <img src="/assets/projects.svg" alt="Projects" className="nav__icon" width="24" height="24" />
          <span>Projects</span>
        </button>
        <button onClick={() => scrollTo("leadership")} className={`nav__link${active === "leadership" ? " is-active" : ""}`} aria-current={active === "leadership" ? "page" : undefined}>
          <img src="/assets/leadership.svg" alt="Leadership" className="nav__icon" width="24" height="24" />
          <span>Leadership</span>
        </button>
        <button onClick={() => scrollTo("achievements")} className={`nav__link${active === "achievements" ? " is-active" : ""}`} aria-current={active === "achievements" ? "page" : undefined}>
          <img src="/assets/achievements.svg" alt="Achievements" className="nav__icon" width="24" height="24" />
          <span>Achievements</span>
        </button>
      </nav>
      {/* Social links removed */}
    </aside>
  );
};
export default Nav;