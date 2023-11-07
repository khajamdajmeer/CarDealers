import React, { useEffect, useRef } from 'react';
import './SectionOne.css';
import image from '../../Resources/Homepage_Hero_kwb9yy.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SectionOne = () => {



    const VerticalScrollref = useRef(null);

    useEffect(()=>{
        const VerticalScrool = VerticalScrollref.current;

        const effect = gsap.to(VerticalScrool,{
            y:-2500,duration:4,
            ease:'none'
        })

gsap.to('.section-one-container',{
    y:0,
    duration:3,
    scrollTrigger:{
        trigger:'.verticalscrollonimg'
        ,pinSpacing:false,
        toggleActions:'play none none reverse'
    }
})


ScrollTrigger.create({
    trigger:'.section-one-container',
    start:'top bottom',
    end:'bottom top',
    animation:effect,
    scrub:1
})


      


    },[])


    return (
        <>
            <div className="section-one-container">
                <div className="section-one-item">
                    <img src={image} alt="" />
                </div>
                <div className="section-one-item2">
                    <div className="section-item2-container">
                        <button>Buy Car</button>
                        <button>sell Car </button>
                    </div>
                    <div className='verticalscrollonimg' ref={VerticalScrollref} ><h2 id='scrolltext'> Bludgers Bludgers Bludgers Bludgers</h2></div>

                </div>

            </div>

        </>
    );
}

export default SectionOne;
