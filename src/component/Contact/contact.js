import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { FaArrowRight, FaEnvelope, FaFileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (event) => {
    event.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm("service_zx8nlcp", "template_ltn2ofk", form.current, { publicKey: "se9B7wavPDvqmV4Eq" })
      .then(() => {
        event.target.reset();
        setStatus("sent");
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="contactSection sectionBlock">
      <div className="sectionShell contactGrid">
        <div className="contactIntro">
          <span className="sectionIndex">05 / CONTACT</span>
          <h2>Have a hard problem worth <em>building for?</em></h2>
          <p>I'm always glad to meet people working on ambitious data, AI, and life-sciences products.</p>
          <a className="emailLink" href="mailto:willkimball8@gmail.com"><FaEnvelope /> willkimball8@gmail.com <FaArrowRight /></a>
          <div className="socialLinks">
            <a href="https://www.linkedin.com/in/william-j-kimball" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> LinkedIn</a>
            <a href="https://github.com/WillJKimball" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
            <a href="/WilliamKimballResume.pdf" target="_blank" rel="noopener noreferrer"><FaFileAlt /> Résumé</a>
          </div>
        </div>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <div className="fieldGroup">
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" type="text" name="from_name" placeholder="Jane Smith" required />
          </div>
          <div className="fieldGroup">
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" type="email" name="from_email" placeholder="jane@company.com" required />
          </div>
          <div className="fieldGroup">
            <label htmlFor="contact-message">What are you working on?</label>
            <textarea id="contact-message" name="message" rows="5" placeholder="Tell me a little about the problem..." required />
          </div>
          <button type="submit" className="submitButton" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"} <FaArrowRight />
          </button>
          <div className={`formStatus ${status}`} aria-live="polite">
            {status === "sent" && "Thanks—your message is on its way."}
            {status === "error" && "Something went wrong. Please email me directly instead."}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
