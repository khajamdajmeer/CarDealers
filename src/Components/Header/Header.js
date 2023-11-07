import React from 'react';
import './Header.css';
import headerbackground from '../../Resources/header.mp4';
import logo from '../../Resources/logo.png'
const Header = () => {

    
  return (
    <>
     <div className="header-Container">
     <video  className='headervideo'  autoPlay loop muted>
      <source  src={headerbackground} type='video/mp4' />
</video>

        <div className="nav-container">
            <div className="nav-menu">
                <div className="navlogo"><img src={logo} alt="" /></div>
                <div className="nav-item">
                    <ul className="nav">
                        <li>Collection</li>
                        <li>Classics</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            <div className="nav-content">
              <div className="content-left">
                <h2>Bludgers <br />Automotive</h2>
                <div className="header-buttons">
                  <button >Contact</button>
                  <button className='collect-btn'>Collection</button>
                </div>
              </div>
              <div className="content-right">Car Dealers</div>
            </div>
        </div>

     </div>

     <div className="header-info">
      <div className="header-info-container">
        <div className="info-left">Hit the road on Beukers' cars!</div>
        <div className="info-right">
        from classics to modern gems, our collection of unique and special cars is ready to be discovered. Take a look and find the car that makes your heart beat faster</div>
        </div>
     </div>
    </>
  );
}

export default Header;
