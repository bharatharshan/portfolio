import React, { useMemo } from "react";import education from "../data/education.js";const Education = () => {  const data = useMemo(() => [...education].sort((a,b)=>parseInt(a.year,10)-parseInt(b.year,10)), []);  const positions = useMemo(() => {    const n = data.length;    if (n === 0) return [];    const start = 8; const end = 92;    const step = n > 1 ? (end - start) / (n - 1) : 0;    return Array.from({ length: n }, (_, i) => start + i * step);  }, [data]);  const pathD = useMemo(() => {    if (positions.length === 0) return "";    const minX = positions[0];    const maxX = positions[positions.length - 1];    return `M ${minX} 50 L ${maxX} 50`;  }, [positions]);  return (    <div className="education" aria-label="Education Timeline">      <div className="container">        <h2 className="section__title" data-reveal>Education</h2>        <div className="education__graph" data-reveal>          <svg className="edu__svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="false" focusable="false">            <defs>              <linearGradient id="eduGradient" x1="0" y1="0" x2="1" y2="0">                <stop offset="0%" stopColor="#22d3ee"/>                <stop offset="100%" stopColor="#6366f1"/>              </linearGradient>            </defs>            <path className="edu__edge edu__edge--draw" d={pathD} fill="none" stroke="url(#eduGradient)" />            {data.map((e, idx) => (              <g key={e.id} className="edu__node" style={{ "--i": idx }}>                <circle cx={positions[idx]} cy={50} r={1.2} />              </g>            ))}          </svg>
          {data.map((e, idx) => {
            const variant = "bottom";
            return (
            <div key={e.id} className="edu__point" style={{ left: `${positions[idx]}%`, top: "50%" }} tabIndex="0" aria-label={`${e.title} ${e.year} ${e.institution} ${e.score}`}>
              <div className={`edu__tooltip edu__tooltip--${variant}`}>
                <h3 className="edu__tooltip-title">{e.title}</h3>
                <p className="edu__tooltip-year">{e.year}</p>
                <p className="edu__tooltip-inst">{e.institution}</p>
                <p className="edu__tooltip-score">{e.score}</p>
              </div>
            </div>
            );
          })}        </div>        {/* details moved next to nodes */}      </div>    </div>  );};export default Education;