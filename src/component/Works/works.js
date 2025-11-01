import React from "react";
import './works.css';
import NFL from '../../assets/NFL2.png';
import Beacon from '../../assets/BeaconQuant.png';
import Spread from '../../assets/BBall.png';
import RunItBack from '../../assets/SaaS.png';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Works = () => {
    const projects = [
        {
            img: Beacon,
            link: "https://drive.google.com/drive/folders/1rKj3eanQVLaTKVOCR7epRdznvvcAVgGq?usp=drive_link",
            title: "ML Portfolio Optimizer",
            desc: "Responsive web app and Flask microservice that runs live Markowitz optimizations on Yahoo Finance data. I engineered time‑series features, built ML models to forecast short‑term equity outperformance, and validated performance with rolling holdouts and cross‑validation. The system fuses alternative signals, packages model outputs as deployable signals, and includes dashboards for allocation diagnostics and live monitoring.",
            tags: ['Python','Flask','React','XGBoost','OpenAI'],
            date: 'July 2025 - present'
        },
        {
            img: Spread,
            link: "https://github.com/WillJKimball/STATMLFinal",
            title: "NCAAB Spread ML Prediction",
            desc: "Built an XGBoost regression pipeline in Python to predict NCAA game spreads, optimizing hyperparameters via cross‑validation to reduce RMSE to within one standard deviation of observed spreads. I extracted and transformed KenPom metrics, engineered univariate and interaction features, and applied correlation filtering and feature‑selection to improve interpretability. Models were evaluated with rolling holdouts and backtests against historical seasons, and experiments were versioned in Git for reproducibility.",
            tags: ['Python','XGBoost','Scikit-Learn'],
            date: 'Jan 2025 - May 2025'
        },
        {
            img: NFL,
            link: "https://github.com/WillJKimball/NFLReceivingYardsML",
            title: "NFL WR Receiving Yards ML Prediction",
            desc: "Predicts WR game receiving yards using Sports Reference data. The pipeline creates rolling and contextual features (opponent defense, YPT, YAC), trains XGBoost regressors (WR-only and full-context), blends predictions, and validates via rolling holdouts and backtests.",
            tags: ['Python','XGBoost','Backtesting'],
            date: 'Aug 2025 - Oct 2025'
        },
        {
            img: RunItBack,
            link: "https://drive.google.com/drive/folders/1UWo_gAsyUs1r_EWZHldOqHpd_HLowb8m?usp=drive_link",
            title: "Run It Back (SaaS)",
            desc: "An end-to-end SaaS platform with a React frontend and server-side APIs. I designed the user experience, implemented authentication and API endpoints, built backend data pipelines and scheduled jobs, and added analytics and monitoring to support production deployments and iterative product improvements.",
            tags: ['React','Django','SaaS','UI/UX'],
            date: 'Sept 2024 - Jan 2025'
        },
    ];

    return(
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <div className="worksImgs">
                {projects.map((project, index) => (
                    <div className="workItem" key={index}>
                        <div className="worksMedia">
                            <img src={project.img} alt={project.title} className="worksImg"/>
                        </div>
                        <div className="workContent">
                            <div className="workHeader">
                                <h3 className="workTitle">{project.title}</h3>
                                <span className="workDate">{project.date}</span>
                            </div>
                            <p className="workDesc">{project.desc}</p>
                            <div className="workTags">
                                {project.tags.map((t,i) => (
                                    <span className="tag" key={i}>{t}</span>
                                ))}
                            </div>
                            <div className="workActions">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="workLink">
                                    <FaExternalLinkAlt className="linkIcon" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="https://github.com/WillJKimball" target="_blank" rel="noopener noreferrer">
                <button className="worksBtn">See More</button>
            </a>
        </section>
    );
}

export default Works;