import React from 'react';
import './Footer.css';
import yticon from '../../Resources/yt.png';
import insticon from '../../Resources/insta.png';
import twitericon from '../../Resources/twiter.png';
import linkedin from '../../Resources/linkedin.png'

const Footer = () => {
  return (
    <>
    <footer className="footer-container">
       <div className="footer-item1">
        <div className="footer-content1">
        Subscribe to stay informed of our latest news, updates.</div>
        <div className="footer-content2">
            <input type="email" placeholder='Enter your email address. *'/>
            <button><span class="material-symbols-outlined">
arrow_forward
</span></button>
        </div>
       </div>
       <div className="footer-item2">
        <div className="footer-content3">
            <h2>collectie <span class="material-symbols-outlined">arrow_forward</span></h2>
            <h2>classics <span class="material-symbols-outlined">arrow_forward</span></h2>
            <h2>Contact <span class="material-symbols-outlined">arrow_forward</span></h2>
        </div>
        <div className="footer-content4">
            <div className="footer-content4-left">
                <span>© 2023 Car Beukers. All Rights Reserved.</span>
                <span>Terms</span>
                <span>Privacy</span>
                <span>cookies</span>
                <span>legal</span>
                <span>Recalls</span>
                <span>Recalls</span>
                <span>Made by <a href="/">Grandsolution</a></span>

            </div>
            <div className="footer-content4-right">
                <img src={linkedin} alt="" />
                <img src={twitericon} alt="" />
                <img src={insticon} alt="" />
                <img src={yticon} alt="" />
            </div>
        </div>
       </div>
    </footer>
      
    </>
  );
}

export default Footer;
