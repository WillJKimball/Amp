import React from "react";
import './intro.css';
import bg from '../../assets/MeWK.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Will Kimball, </span> <br />An Aspiring Quantum <br />Developer</span>
                <p className="introPara">Third year computer scientist and statististician at University of Virginia</p>
                <Link to="contact" smooth={true} duration={500}>
                    <button className="btn">
                        <img src={btnImg} alt="Hire Me" className="btnImg" />
                        Hire Me
                    </button>
                </Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro