import React, { useRef } from "react";
import './contact.css';
import Dedham from '../../assets/Dedham.png';
import UVA from '../../assets/UVA.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
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
                <p className="experienceDesc"> I have had the opportunity...

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
                        <img src={FacebookIcon} alt="FacebookIcon" className="link"/>
                        <img src={TwitterIcon} alt="Twitter" className="link"/>
                        <img src={YouTubeIcon} alt="Youtube" className="link"/>
                        <img src={InstagramIcon} alt="Instagram" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact