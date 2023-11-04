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
                <span>Vol gas naar je droom auto</span>
                Auto's zijn mijn ding. Wat startte als een hobby, explodeert nu! Mijn garage staat voller dan ooit en ik voel dat het tijd is om te schakelen. Niet omdat ik deze prachtige machines niet waardeer, maar om ruimte te creëren voor nieuwe krachtpatsers. Ik zet nu de stap om mijn eigen autobedrijf te lanceren, zodat ik vol gas mijn passie kan volgen en tegelijkertijd andere autoliefhebbers een unieke ervaring kan bieden!</div>
            <div className="about-item-img" id='about-img' >
                <img src={aboutimg} alt="" />
            </div>
        </div>
    </div>

      
    </>
  );
}

export default About;
