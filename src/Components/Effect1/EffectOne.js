import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './EffectOne.css';
import img1 from '../../Resources/mc1.png';
import img2 from '../../Resources/effectone/ef1.png';
import img3 from '../../Resources/effectone/ef5.png';
import img4 from '../../Resources/mc4.png';

import { ScrollTrigger} from 'gsap/all';
import { Flip } from 'gsap/Flip';

const EffectOne = () => {
    const containerRef = useRef(null);
    const imagesRef = useRef(null);
  
    useEffect(() => {
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Flip);
// runLenis();
// runAnimation();
      const container = containerRef.current;
      const scroll = imagesRef.current;
    const contaienrwidth = container.offsetWidth;
    const scrollwidth = scroll.offsetWidth;


    const t1 =gsap.timeline({
        scrollTrigger:{
            trigger:container,
            start:'top top',
            end:`+=${contaienrwidth}`,
            scrub: 1,
            pin: true
        }
    });


      t1.to(scroll,{
        x:`-${scrollwidth}`
        ,ease:'none'
    });
  
    ScrollTrigger.refresh();
        return () => {
          t1.kill();
        };

    }, []);
  
    return (
      <div className="container" ref={containerRef}>
        <div className="images" ref={imagesRef}>
          <img src={img1}alt="1" className='child1' />
          <img src={img2} alt="2" id='child2' />
          <img src={img3} alt="3" id='child3' />
          <img src={img3} alt="3" id='child4' />
          <img src={img3} alt="3" id='child5' />
          <img src={img4} alt="4" id='child6' />
          <img src={img3} alt="6" id='child7' />
        </div>
      </div>
    );
  };

export default EffectOne;
