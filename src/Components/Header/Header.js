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
                        <li>Collectie</li>
                        <li>Classics</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            <div className="nav-content">
              <div className="content-left">
                <h2>Beukers <br />Automotive</h2>
                <div className="header-buttons">
                  <button >Contact</button>
                  <button className='collect-btn'>Collectie</button>
                </div>
              </div>
              <div className="content-right">Car Beukers</div>
            </div>
        </div>

     </div>

     <div className="header-info">
      <div className="header-info-container">
        <div className="info-left">Beuk de weg op Beukers' bolides!</div>
        <div className="info-right">van klassiekers tot moderme parels, onze collectie aan unieke en bijzondere auto's staat klaar om ontdekt te worden. Neem een kijkje en vind de wagen die juow hart sneller laat kloppen</div>
        </div>
     </div>
    </>
  );
}

export default Header;
