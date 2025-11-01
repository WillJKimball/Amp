import React from "react";
import './skills.css';
import { FaRobot, FaCode, FaAtom, FaChartLine } from 'react-icons/fa';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I am a quantitative analyst and full‑stack developer who applies machine learning and AI to extract signal from time‑series and cross‑sectional data. I design end‑to‑end pipelines for feature engineering, model development (XGBoost and ensemble methods), rigorous backtesting and cross‑validation, model calibration, and production deployment, and I build the React frontends and Flask/Django services that operationalize models to deliver data‑driven investment and risk insights across finance, healthcare, and sports domains.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <div className="skillIcon"><FaRobot /></div>
                    <div className="skillBarText">
                        <h2>Machine Learning & AI</h2>
                        <p>I have extensive experience developing machine learning models using Scikit-Learn and XGBoost, with a focus on ensemble methods such as Random Forest and gradient boosting. My work includes feature engineering, train-test splits, hyperparameter tuning, and model validation to optimize predictive performance. I've applied these techniques to financial markets, regulatory risk prediction and sports analytics, achieving measurable improvements in accuracy and interpretability.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillIcon"><FaChartLine /></div>
                    <div className="skillBarText">
                        <h2>Quantitative Analysis</h2>
                        <p>I built a Flask microservice and React dashboard that runs live Markowitz optimizations on Yahoo Finance data, enforcing top‑k allocation constraints and surfacing allocation diagnostics in real time. I engineered time‑series features (technical, momentum, and risk), tuned an XGBoost model to predict 3‑month S&P outperformance across 80+ tech equities, and validated results with cross‑validation and rolling holdouts alongside logistic and random‑forest baselines. I also combined Finnhub feeds, Google Trends, and GPT‑4 sentiment analysis to produce structured signals, then fused those signals with ensemble ML models to generate robust forecasts that drive live allocation decisions and downstream deployment.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillIcon"><FaCode /></div>
                    <div className="skillBarText">
                        <h2>Software Development</h2>
                        <p>I have developed full-stack applications for both web and mobile platforms using frameworks such as React, Flutter, Django, and Swift. My work emphasizes building accessible and performant user experiences while also ensuring backend efficiency and security. For example, I implemented secure authentication with JWT tokens in Django REST Framework, designed real-time features with asynchronous APIs and web sockets, and optimized database queries to cut load times by over 40%. On the frontend, I’ve delivered responsive, cross-platform interfaces using Flutter and React, balancing usability with scalability. These projects demonstrate my ability to bridge user-focused design with robust backend engineering.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillIcon"><FaAtom /></div>
                    <div className="skillBarText">
                        <h2>Quantum Computing</h2>
                        <p>I conducted exploratory undergraduate research in quantum computing, focusing on the mathematical foundations of quantum systems through linear algebra. This included studying topics such as quantum gate teleportation and examining how basic quantum operations could be applied to machine learning and AI. My work emphasized building a conceptual foundation rather than developing production-level systems.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Skills