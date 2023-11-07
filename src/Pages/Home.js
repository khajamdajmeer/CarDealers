import React from 'react';
import Header from '../Components/Header/Header';
import About from '../Components/About/About';
import SectionOne from '../Components/Section1/SectionOne';
import EffectThree from '../Components/EffectThree/EffectThree';
import Footer from '../Components/Footer/Footer';
// import EffectOne from '../Components/Effect1/EffectOne';
// import TestCase from '../Components/TestCase';

const Home = () => {
  return (
    <>
      <Header/>
      {/* <EffectOne/> */}
      {/* <TestCase/> */}
      <About/>
      <SectionOne/>
      <EffectThree/>
      <Footer/>

    </>
  );
}

export default Home;
