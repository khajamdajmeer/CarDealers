import React, { useEffect, useRef } from 'react';
import './EffectThree.css';
import img1 from '../../Resources/mc1.png';
import img2 from '../../Resources/mc2.png';
import img3 from '../../Resources/mc3.png';
import img4 from '../../Resources/mc4.png';
import video from '../../Resources/header.mp4';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EffectThree = () => {


    const ScrollItemref = useRef(null)
const ScrollContainerref = useRef(null)

    

    useEffect(() => {
gsap.registerPlugin(ScrollTrigger)

        const ScrollItem = ScrollItemref.current;
        const ScrollContainer = ScrollContainerref.current;
        const scrollitemwidth = ScrollItem.offsetWidth;
        const scrollcontainerwidth = ScrollContainer.offsetWidth;
    
        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: ScrollContainer,
            start: 'top top',
            end: `200+=${scrollcontainerwidth}`,
            scrub: 1,
            pin: true,
          },
        });
    
        t1.to(ScrollItem, {
          x: `-${scrollitemwidth }`,
          ease: 'none',
        });
    
        ScrollTrigger.refresh();
    
        return () => {
          t1.kill();
        };
      }, []);

  return (
    <>

    <div className="Effect-3-container" ref={ScrollContainerref}>
        <div className="Effect-3item">
            <h2>Het hele pakket.</h2>
            <p>Bij ons autobedrijf geen gedoe met pakketten of extra kosten. Onze prijzen zijn all-in, dus je koopt een auto en kunt direct de weg op. Eenvoudig, transparant en zonder verrassingen!</p>
        </div>
        <div className="effect3-scroll-container" >
            <div className="effect3-img-item" ref={ScrollItemref}>

            <img src={img1} alt="" />
            <div className='effect3-subdiv'>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            </div>
            <video  className='headervideo'  autoPlay loop muted>
      <source  src={video} type='video/mp4' />
</video>
            <img src={img4} alt="" />
            <img src={img1} alt="" />
            <img src={img4} alt="" />
            <img src={img1} alt="" />
            </div>
        </div>
    </div>
      
    </>
  );
}

export default EffectThree;
