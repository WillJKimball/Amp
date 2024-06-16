import React from "react";
import './intro.css';
import bg from '/Users/willkimball/react-app/my-app/src/assets/image.png'
import btnImg from '/Users/willkimball/react-app/my-app/src/assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Will Kimball, </span> <br />A Software Developer</span>
                <p className="introPara">I am a rising third year computer scientist and statististician at University of Virginia</p>
                <Link><button className="btn"><img src={btnImg} alt ="Hire Me" className="btnImg"></img> Hire Me </button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>

    )
}

export default Intro