import React from "react";
import './works.css';
import Transformer from '../../assets/bumble.png';
import RAProj from '../../assets/CollegeIMG2.jpg';
import RunItBack from '../../assets/RunItBackLogo.jpg';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Works = () => {
    const projects = [
        {
            img: Transformer,
            link: "https://github.com/WillJKimball/WillJKimball.github.io/blob/main/Spatial%20Transformers%20Research%20Project.pdf",
            title: "Spatial Transformers Research"
        },
        {
            img: RAProj,
            link: "https://drive.google.com/drive/folders/1Tw9y60cF8tq0HBDgCAscmU-1TqZsF1-x?usp=drive_link",
            title: "RA Management Project"
        },
        {
            img: RunItBack,
            link: "https://drive.google.com/drive/folders/1UWo_gAsyUs1r_EWZHldOqHpd_HLowb8m?usp=drive_link",
            title: "Run It Back Project"
        }
    ];

    return(
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">The following projects showcase my technical expertise and research experience.</span>
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