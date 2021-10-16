import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Sliders from '../Slider/slider';
import Prizes from '../Prizes/prizes';
import Cards2 from '../Contestants/contestantCard';
import lms from '../../assets/images/lms.png'
import img9 from '../../assets/images/Winner01.png'
import { CountdownTimer } from '../Countdown/CountdownTimer';
import { Button } from '../Button';
import LeadersBoard from '../Table/LeaderBoard';
import Paginations from '../Table/Paginations';
import WinnerCard from '../WinnerCard';

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
      {/* <section className='footer-subscription'>
        <img src={img9} alt="winner2021" className="img-body" />
        <h3 className="cards-item-b-text">Akhigbemen Bernadette Ebehireme</h3>
      </section> */}
      {/* <WinnerCard/> */}
      <LeadersBoard />
      <div>
      <div className="reg-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          REGISTER NOW! <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
      {/* <CountdownTimer /> */}
      
      <Footer />
    </>
  );
}

export default Home;