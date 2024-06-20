import React from "react";
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return(
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">The following images provide directions to my projects housed on my github account.</span>
            <div className="worksImgs">
                <a href="Spatial Transformers Research Project.pdf" target="_blank">
                    <img src={Portfolio1} alt="Project 1" className="worksImg"/>
                </a>
                <a href="https://github.com/WillJKimball/CollegetoNBA.git" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio2} alt="Project 2" className="worksImg"/>
                </a>
                <a href="https://github.com/WillJKimball/ScheduleApp.git" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio3} alt="Project 3" className="worksImg"/>
                </a>
                <a href="https://github.com/WillJKimball/project4" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio4} alt="Project 4" className="worksImg"/>
                </a>
                <a href="https://github.com/WillJKimball/project5" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio5} alt="Project 5" className="worksImg"/>
                </a>
                <a href="https://github.com/WillJKimball/project6" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio6} alt="Project 6" className="worksImg"/>
                </a>
            </div>
            <button className="worksBtn">See More</button>
        </section>
    );
}

export default Works