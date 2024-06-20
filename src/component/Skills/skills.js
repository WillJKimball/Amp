import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import MachineLearning from '../../assets/machine.png';
import DataAnalysis from '../../assets/data.png';

const Skills = () => {
    return(
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I am an aspiring software engineer with an interest in pursuing 
                a route in machine learning and artifical intelligence. My work spans from creating
                predictive models in sports to researching components of large language models aimed 
                toward advancing healthcare technology.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I have worked with both React and Swift to create user accessible applications
                            on web and mobile environments
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={MachineLearning} alt="MachineLearning" className="skillBarImg2"/>
                    <div className="skillBarText">
                        <h2>Machine Learning</h2>
                        <p>I have worked with TensorFlow to explore the integration of components like 
                            spatial transformer networks to large language models
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DataAnalysis} alt="StatisticalDataAnalysis" className="skillBarImg3"/>
                    <div className="skillBarText">
                        <h2>Statistical Data Analysis</h2>
                        <p>I have done academic research in networks and nodes as well as analysis of 
                            large sets of data with Python and R
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Skills