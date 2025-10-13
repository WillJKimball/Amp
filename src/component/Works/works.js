import React from "react";
import './works.css';
import NFL from '../../assets/nfl.png';
import Spread from '../../assets/spread.png';
import RunItBack from '../../assets/RunItBackLogo.jpg';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Works = () => {
    const projects = [
        {
            img: Spread,
            link: "https://github.com/WillJKimball/STATMLFinal",
            title: "NCAAB ML Spread Prediction Project"
        },
        {
            img: NFL,
            link: "https://github.com/WillJKimball/NFLReceivingYardsML",
            title: "NFL Receiving Yards ML Prediction Project"
        },
        {
            img: RunItBack,
            link: "https://drive.google.com/drive/folders/1UWo_gAsyUs1r_EWZHldOqHpd_HLowb8m?usp=drive_link",
            title: "Run It Back Project (SaaS)"
        },
    ];

    return(
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">The following projects showcase my technical expertise.</span>
            <div className="worksImgs">
                {projects.map((project, index) => (
                    <div className="workItem" key={index}>
                        <img src={project.img} alt={project.title} className="worksImg"/>
                        <div className="workOverlay">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt className="linkIcon" />
                                <p>{project.title}</p>
                            </a>
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