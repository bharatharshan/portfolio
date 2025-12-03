import React, { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";

import Leadership from "./components/Leadership.jsx";
import Loader from "./components/Loader.jsx";

function App(){
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    document.body.classList.toggle("is-loading", loading);
    if(loading){
      const timer = setTimeout(()=> setLoading(false), 1500);
      return ()=> clearTimeout(timer);
    }
  },[loading]);

  useEffect(()=>{
    const elems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add("reveal-visible");
        } else {
          entry.target.classList.remove("reveal-visible");
        }
      });
    },{ threshold:0.15 });
    elems.forEach((el)=>{
      el.classList.add("reveal");
      observer.observe(el);
    });
    return ()=> observer.disconnect();
  },[]);

  return (
    <>
      {loading && <Loader/>}
      <div className={`app${!loading ? " is-loaded" : ""}`}>
        <Nav/>
        <main>
          <section id="hero" aria-label="Hero" data-reveal><Hero/></section>
          <section id="education" aria-label="Education" data-reveal><Education/></section>
          <section id="skills" aria-label="Technical Skills" data-reveal><Skills/></section>
          <section id="projects" aria-label="Projects" data-reveal><Projects/></section>
          <section id="leadership" aria-label="Leadership Experience" data-reveal><Leadership/></section>
          <section id="achievements" aria-label="Achievements" data-reveal><Achievements/></section>
        </main>
        <footer className="footer">
          <p>© <span id="year">{new Date().getFullYear()}</span> • Crafted with React & Vite</p>
        </footer>
      </div>
    </>
  );
}
export default App;