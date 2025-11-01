import React, { useRef } from "react";
import './contact.css';
import UVA from '../../assets/UVA.png';
import LinkedinIcon from '../../assets/linkedin.png';
import GitHubIcon from '../../assets/github.png';
import ResumeIcon from '../../assets/resume2.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zx8nlcp', 'template_ltn2ofk', form.current, {publicKey: 'se9B7wavPDvqmV4Eq',})
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!')
            }, (error) => {
                console.log(error.text);
            },
        );
      };
    return(
        <section id='contactPage'>
            <div id="experience">
                <h1 className="contactPageTitle">My Research</h1>
                <div className="experienceBars">
                    <div className="experienceBar">
                        <img src={UVA} alt="Continuous Variable Quantum Computing Research" className="experienceBarImg3" />
                        <div className="experienceBarText">
                            <h2>Continuous Variable Quantum Computing Research</h2>
                            <p>Explored quantum computing concepts under Professor Bekiranov at the University of Virginia, studying the mathematics of Continuous Variable Quantum Computing (CVQC) and investigating how machine learning techniques might be applied to problems such as multimode entanglement.</p>
                            <p>Conducted exploratory research on high-dimensional quantum systems, using linear algebra and simulation tools to understand how quantum principles could inform neural network training and potential applications in optical quantum computing.</p>
                            <p>Engaged in self-study of quantum mechanics through the Feynman Lectures and initiated a Quantum Machine Learning (QML) project focused on identifying leukemia in protein structures using quantum neural networks, integrating quantum theory with real-world healthcare applications.</p>
                        </div>
                    </div>
                    <div className="experienceBar">
                        <img src={UVA} alt="University of Virginia Research" className="experienceBarImg" />
                        <div className="experienceBarText">
                            <h2>Missingness in Neural Networks Research</h2>
                            <p>Conducted academic research under Professor Lubberts focusing on network theory and graph algorithms. Applied Ollivier Ricci curvature and Dijkstra's Algorithm to model and interpret structural gaps caused by missingness in edges within networks.</p>
                            <p>Ran simulations using Python's NetworkX library to evaluate curvature-based methods for identifying and replacing missing links, contributing to advancements in understanding network structures.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="from_name"/>
                    <input type="email" className="email"placeholder="Your Email" name="from_email"/>
                    <textarea className="msg" name="message" rows = "5"placeholder="Your Message"/>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="Links">
                        <a href="https://www.linkedin.com/in/will-kimball-6a4198268/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinIcon} alt="Linkedin" className="link"/>
                        </a>
                        <a href="https://github.com/WillJKimball?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <img src={GitHubIcon} alt="GitHub" className="link"/>
                        </a>
                        <a href="https://drive.google.com/file/d/1NZHo0DVEvM3nMe8ScY8H7aoeku8fT0XU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <img src={ResumeIcon} alt="Resume" className="link"/>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact