import React from 'react';
import './About.css';
import aboutimg from '../../Resources/aboutimg.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
const About = () => {





   
   

  return (
    <>
    <div className="about-item-container" id='about' >
        <div className="about-item">
            <div className="about-item-content">
                <h2>About</h2>
                <span>
Full throttle to your dream car</span>
Cars are my thing. What started as a hobby is now exploding! My garage is fuller than ever and I feel it's time to switch gears. Not because I don't appreciate these beautiful machines, but to create space for new powerhouses. I am now taking the step to launch my own car company, so that I can follow my passion full throttle and at the same time offer other car enthusiasts a unique experience!</div>
            <div className="about-item-img" id='about-img' >
                <img src={aboutimg} alt="" />
            </div>
        </div>
    </div>

      
    </>
  );
}

export default About;
