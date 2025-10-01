import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import MachineLearning from '../../assets/machine.png';
import DataAnalysis from '../../assets/data.png';
import QuantumComputing from '../../assets/QCLogo2.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I am an aspiring machine learning engineer with expertise in building full-stack applications, conducting statistical research, and leveraging machine learning for innovative solutions. My work spans from creating predictive models in healthcare and sports analytics to exploring quantum computation frameworks in artificial intelligence.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={MachineLearning} alt="MachineLearning" className="skillBarImg2" />
                    <div className="skillBarText">
                        <h2>Machine Learnin & AI</h2>
                        <p>I have extensive experience developing machine learning models using Scikit-Learn and XGBoost, with a focus on ensemble methods such as Random Forest and gradient boosting. My work includes feature engineering, train-test splits, hyperparameter tuning, and model validation to optimize predictive performance. I've applied these techniques to real-world domains, from regulatory risk prediction to sports analytics, achieving measurable improvements in accuracy and interpretability.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Software Development</h2>
                        <p>I have developed full-stack applications for both web and mobile platforms using frameworks such as React, Flutter, Django, and Swift. My work emphasizes building accessible and performant user experiences while also ensuring backend efficiency and security. For example, I implemented secure authentication with JWT tokens in Django REST Framework, designed real-time features with asynchronous APIs and web sockets, and optimized database queries to cut load times by over 40%. On the frontend, I’ve delivered responsive, cross-platform interfaces using Flutter and React, balancing usability with scalability. These projects demonstrate my ability to bridge user-focused design with robust backend engineering.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={QuantumComputing} alt="QuantumComputing" className="skillBarImg4" />
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