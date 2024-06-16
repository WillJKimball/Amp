import React, { useRef } from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import Adobe from '../../assets/adobe.png';
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
                    <img src={Walmart} alt="Experience" className="experienceImg"/>
                    <img src={Adobe} alt="Experience" className="experienceImg"/>
                    <img src={Microsoft} alt="Experience" className="experienceImg"/>
                    <img src={Facebook} alt="Experience" className="experienceImg"/>
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