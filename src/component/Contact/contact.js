import React, { useRef } from "react";
import './contact.css';
import Dedham from '../../assets/Dedham.png';
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
                <h1 className="contactPageTitle">My Experience</h1>
                <p className="experienceDesc"> I have had the opportunity to engage in academic research at the University
                    of Virginia with the statistics departments. I have been involved in researching missingness in edges in networks
                    in attempts to further understand preferential attachment models. I have also had the opportunity to intern at 
                    Dedham Savings in data analytics within the commerical lending department, generating significant findings for the 
                    branch.
                </p>
                <div className="experienceImgs">
                    <img src={UVA} alt="Experience" className="experienceImg"/>
                    <img src={Dedham} alt="Experience" className="experienceImg2"/>
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
                        <a href="https://drive.google.com/file/d/1wXXfhTmiuSxxKpBm0k5QhFy9jRe16wG_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <img src={ResumeIcon} alt="Resume" className="link"/>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact