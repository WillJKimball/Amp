import React from "react";
import "./intro.css";
import portrait from "../../assets/WilliamKimballHeadshot.png";
import { Link } from "react-scroll";
import { FaArrowDown, FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";

const Intro = () => (
  <section id="intro" className="heroSection">
    <div className="heroGlow heroGlowOne" />
    <div className="heroGlow heroGlowTwo" />
    <div className="sectionShell heroGrid">
      <div className="heroContent">
        <span className="portraitKicker">01 / ABOUT</span>
        <div className="eyebrow"><span /> AI engineer · Data engineer · Founder</div>
        <h1>I build AI systems that turn complex data into <em>clear decisions.</em></h1>
        <p className="heroSummary">
          I'm Will Kimball, a data scientist building explainable AI products,
          retrieval systems, and production data pipelines for enterprise and life-sciences teams.
        </p>
        <div className="heroActions">
          <Link className="primaryButton" to="experience" smooth offset={-80} duration={500}>
            Explore my work <FaArrowDown />
          </Link>
          <a className="secondaryButton" href="/WilliamKimballResume.pdf" target="_blank" rel="noopener noreferrer">
            <FaFileAlt /> View résumé
          </a>
        </div>
        <div className="heroMeta">
          <span><FaMapMarkerAlt /> Boston, Massachusetts</span>
          <span className="statusDot" />
          <span>Building at Versetal + Process Trace AI</span>
        </div>
      </div>

      <div className="portraitStage" aria-label="Portrait of Will Kimball">
        <div className="portraitCard">
          <img src={portrait} alt="Will Kimball" className="portraitImage" />
          <div className="portraitCaption">
            <span>BA Computer Science & Applied Statistics</span>
            <strong>University of Virginia · 2026</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
