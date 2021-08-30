import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Sliders from '../Slider/slider';
import Prizes, { prizes } from '../Prizes/prizes';
import Cards2 from '../Contestants/contestantCard';
import lms from '../../assets/images/lms.png'
import { CountdownTimer } from '../Countdown/CountdownTimer';
import DataTable from '../Table/Table';

function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <Sliders />
      <Cards />
      <section className='footer-subscription'>
        <img src={lms} alt="lms" className="img-body" />
        
      </section>
      <Prizes />
      <Cards2 />
      {/* <DataTable /> */}
      <CountdownTimer />
      
      <Footer />
    </>
  );
}

export default Home;