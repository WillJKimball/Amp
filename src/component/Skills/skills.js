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
            <span className="skillDesc">I am an aspiring software engineer with expertise in building full-stack applications, conducting statistical research, and leveraging machine learning for innovative solutions. My work spans from creating predictive models in healthcare and sports analytics to optimizing quantum computing frameworks.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={MachineLearning} alt="MachineLearning" className="skillBarImg2" />
                    <div className="skillBarText">
                        <h2>Machine Learning</h2>
                        <p>I have utilized TensorFlow and Scikit-Learn to develop advanced models, such as convolutional neural networks (CNNs) for computer vision and quantum-enhanced neural networks for optimizing quantum operations.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={QuantumComputing} alt="QuantumComputing" className="skillBarImg4" />
                    <div className="skillBarText">
                        <h2>Quantum Computing</h2>
                        <p>I am actively engaged in quantum computing research, focusing on Continuous Variable Quantum Computing (CVQC), where I explore machine learning-driven frameworks to optimize multimode entanglement. I am also self-studying the Feynman Lectures on Quantum Mechanics to deepen my understanding of fundamental concepts. Currently, I am starting a Quantum Machine Learning (QML) project to identify leukemia in protein structures using quantum neural networks. This combines my knowledge in quantum theory, Qiskit, and bioinformatics for real-world applications in healthcare technology.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DataAnalysis} alt="DataAnalysis" className="skillBarImg3" />
                    <div className="skillBarText">
                        <h2>Data Analysis</h2>
                        <p>I have conducted academic and professional research using Python (Pandas, NumPy, NetworkX) and R to analyze large datasets, model network structures, and provide actionable insights.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I have developed user-friendly applications for web and mobile platforms using frameworks like React, Flutter, and Swift, focusing on accessibility and performance.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Skills