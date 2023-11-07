import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Test = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create animations
    const baeLogo = containerRef.current.querySelector('.bae-logo');
    const middleImage = containerRef.current.querySelector('.middle-image');
    const baeLogoDuplicate = containerRef.current.querySelector('.bae-logo-duplicate');

    // Animate the elements
    gsap.set(baeLogo, { transformOrigin: "100% 50%", scaleX: 1 });
    gsap.to(baeLogo, {
      scaleX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: baeLogo,
        start: "center center",
        end: "right left",
        scrub: true,
        onLeave: () => {
          gsap.set(baeLogo, { scaleX: 1 });
        },
      },
    });

    const middleImageTl = gsap.timeline({
      scrollTrigger: {
        trigger: middleImage,
        start: "left right",
        end: "right right",
        scrub: true,
        ease: "none",
      },
    });
    middleImageTl
      .set(middleImage, { transformOrigin: "0% 50%", scale: 0 })
      .to(middleImage, { scale: 1 })
      .set(middleImage, { transformOrigin: "100% 50%" })
      .to(middleImage, { scale: 0 });

    gsap.set(baeLogoDuplicate, { transformOrigin: "0% 50%" });
    gsap.fromTo(
      baeLogoDuplicate,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: baeLogoDuplicate,
          start: "left right",
          end: "right left",
          scrub: true,
          onLeaveBack: () => {
            gsap.set(baeLogoDuplicate, { scaleX: 1 });
          },
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="animated-container">
      <div className="bae-logo">Your Logo Element</div>
      <div className="middle-image">Your Middle Image</div>
      <div className="bae-logo-duplicate">Your Duplicate Logo Element</div>
    </div>
  );
};

export default Test;
