import React from 'react'
import about from "./About.jpg"
import ScrollAnimation from 'react-animate-on-scroll';
import "./About.css"

const About = () => {
    return (
        <div className='aboutWrapper' id='about'>
           <ScrollAnimation animateIn="fadeIn">
           <div className='aboutBox'>
                <div className='aboutLeft'>
                    <img src={about} alt="profile_pic" />
                </div>
                <div className='aboutRight'>
                    <div>
                    <p className='about'>About</p>
                    <p className="name">Hello,👋 This is <span style={{color:"#fe9401"}}>Aman Singh Rajawat</span></p>
                    <p className='aboutdesc'>A Full-Stack Web Developer trained by Masai School, Bengaluru. I have a passion to create useful projects and systems which can contribute to everyone's well-being. I go to the full extent in execution.!</p>
               
                    </div>
                </div>
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default About
