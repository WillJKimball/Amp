import React from "react";
import "./works.css";
import ProcessTrace from "../../assets/ProcessTraceLogo.png";
import Hound from "../../assets/Hound.png";
import Spread from "../../assets/BBall.png";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    img: ProcessTrace,
    link: null,
    title: "Process Trace AI",
    kicker: "Featured venture · Pharmaceutical AI",
    desc: "Process Trace AI is an evidence-first investigation platform for pharmaceutical manufacturing. It unifies deviations, CAPAs, procedures, and quality records in a traceable workspace, using agentic retrieval and ontology-guided validation to surface relevant evidence, test investigative hypotheses, and produce source-backed, review-ready findings. Built end to end with React, FastAPI, and DuckDB, the product is informed by ongoing discovery with manufacturing and quality leaders.",
    tags: ["React", "FastAPI", "DuckDB", "RAG", "Agentic AI"],
    date: "2026 — Present",
    featured: true,
    status: "Private beta",
  },
  {
    img: Hound,
    link: "https://drive.google.com/drive/folders/1rKj3eanQVLaTKVOCR7epRdznvvcAVgGq?usp=drive_link",
    title: "Machine Learning Portfolio Optimizer",
    kicker: "Featured · Quantitative ML",
    desc: "A full-stack quantitative research platform that combines cardinality-constrained Markowitz optimization with XGBoost forecasts of 63-trading-day excess returns across 200+ large-cap equities. The forecasting pipeline integrates technical and cross-sectional indicators, financial-statement fundamentals, Google Trends data, and OpenAI-powered sentiment analysis of Finnhub news. A React dashboard and Flask API support interactive portfolio analysis, while rolling-window backtests and untouched chronological holdouts provide leakage-aware evaluation of forecast accuracy, asset selection, and realized performance.",
    tags: ["Python", "Flask", "React", "XGBoost", "OpenAI"],
    date: "2025 — Present",
    featured: true,
  },
  {
    img: Spread,
    link: "https://github.com/WillJKimball/STATMLFinal",
    title: "NCAAB Spread Prediction",
    kicker: "Sports analytics",
    desc: "An end-to-end XGBoost regression pipeline for predicting NCAA men’s basketball point spreads from KenPom team metrics. The workflow engineers univariate and interaction features, applies correlation filtering and feature selection, and tunes hyperparameters through cross-validation to improve predictive accuracy and interpretability. Rolling-season holdouts and historical backtests compare model estimates with observed spreads while preserving temporal order and reproducibility.",
    tags: ["Python", "XGBoost", "Scikit-Learn"],
    date: "2025",
    featured: true,
    mediaClass: "ncaabMedia",
  },
];

const Works = () => (
  <section id="works" className="worksSection sectionBlock">
    <div className="sectionShell">
      <div className="sectionHeading projectsHeading">
        <span className="sectionIndex">04 / SELECTED WORK</span>
        <h2>Independent projects, <em>built with applied AI.</em></h2>
      </div>

      <div className="projectsGrid">
        {projects.map((project) => (
          <article className={`projectCard ${project.featured ? "featuredProject" : ""}`} key={project.title}>
            {project.link ? (
              <a className={`projectMedia ${project.mediaClass || ""}`} href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>
                <img src={project.img} alt="" />
                <span className="projectLaunch"><FaExternalLinkAlt /></span>
              </a>
            ) : (
              <div className={`projectMedia ${project.mediaClass || ""}`}>
                <img src={project.img} alt={`${project.title} logo`} />
                <span className="privateBadge">{project.status}</span>
              </div>
            )}
            <div className="projectContent">
              <div className="projectEyebrow"><span>{project.kicker}</span><span>{project.date}</span></div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="projectFooter">
                <div className="tagRow">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}><FaArrowRight /></a>
                ) : (
                  <span className="privateProjectLabel">Case study available on request</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <a className="githubLink" href="https://github.com/WillJKimball" target="_blank" rel="noopener noreferrer">
        <FaGithub /> More work on GitHub <FaArrowRight />
      </a>
    </div>
  </section>
);

export default Works;
