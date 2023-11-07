import React, { useEffect, useRef, useState } from 'react';
import './EffectThree.css';
import img1 from '../../Resources/mc1.png';
import img2 from '../../Resources/mc2.png';
import img3 from '../../Resources/mc3.png';
import img4 from '../../Resources/mc4.png';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EffectThree = () => {


    const ScrollItemref = useRef(null)
const ScrollContainerref = useRef(null)

    const [contentready,setContentReady]=useState(false);

    useEffect(() => {
gsap.registerPlugin(ScrollTrigger)

        const ScrollItem = ScrollItemref.current;
        const ScrollContainer = ScrollContainerref.current;
        const scrollitemwidth = ScrollItem.offsetWidth;
        const scrollcontainerwidth = ScrollContainer.offsetWidth;
console.log(scrollitemwidth,scrollcontainerwidth)
    
        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: ScrollContainer,
            start: 'top top',
            end: `+=${scrollitemwidth}`,
            scrub: 1,
            pin: true
          },
        });
    
        t1.to(ScrollItem, {
          x: `-${scrollitemwidth-200}`,
          ease: 'none',
        });
    
        ScrollTrigger.refresh();
    
        return () => {
          t1.kill();
        };
      }, [contentready]);

      useEffect(()=>{
        setTimeout(()=>{setContentReady(true)},3000);
      },[])

  return (
    <>

    <div className="Effect-3-container" ref={ScrollContainerref}>
        <div className="Effect-3item">
            <h2>
The whole package.</h2>
            <p>With our car company, no hassle with packages or extra costs. Our prices are all-inclusive, so you buy a car and can hit the road straight away. Simple, transparent and without surprises!</p>
        </div>
        <div className="effect3-scroll-container" >
            <div className="effect3-img-item" ref={ScrollItemref}>

            <img src={img1} alt="" />
            <div className='effect3-subdiv'>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            </div>
       
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
