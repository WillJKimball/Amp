import React from "react";
import './works.css';
import Transformer from '../../assets/bumble.png';
import Anthony from '../../assets/anthony.png';
import Clock from '../../assets/clock.png';
import RunItBack from '../../assets/RunItBackLogo.jpg';

const Works = () => {
    return(
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">The following images provide directions to my projects housed on my github account.</span>
            <div className="worksImgs">
                <a href="https://github.com/WillJKimball/WillJKimball.github.io/blob/main/Spatial%20Transformers%20Research%20Project.pdf" target="_blank" rel="noopener noreferrer">
                    <img src={Transformer} alt="Project 1" className="worksImg"/>
                </a>
                <a href="https://github.com/WillJKimball/CollegetoNBA.git" target="_blank" rel="noopener noreferrer">
                    <img src={Anthony} alt="Project 2" className="worksImg"/>
                </a>
                <a href="https://drive.google.com/drive/folders/1UWo_gAsyUs1r_EWZHldOqHpd_HLowb8m?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <img src={RunItBack} alt="Project 3" className="worksImg"/>
                </a>
            </div>
            <a href="https://github.com/WillJKimball" target="_blank" rel="noopener noreferrer">
                <button className="worksBtn">See More</button>
            </a>
        </section>
    );
}

export default Works