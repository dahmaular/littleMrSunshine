import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Sliders from '../Slider/slider';
import Prizes from '../Prizes/prizes';
import Cards2 from '../Contestants/contestantCard';
import lms from '../../assets/images/aboutUsHeader.jpg'
import { CountdownTimer } from '../Countdown/CountdownTimer';
import { Button } from '../Button';
import LeadersBoard from '../Table/LeaderBoard';
import Paginations from '../Table/Paginations';
import img from '../../assets/images/KingofBoys_Prizes.png';

function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <Sliders />
      <Cards />
      <section className='footer-subscription'>
        <img src={lms} alt="lms" className="img-body" />
        
      </section>
      {/* <Prizes /> */}
      <div className="prize-row">
        <div className="prize-view">
          <img src={img} className="prize-image" />
        </div>
        <div className="prize-text-view">
          <h4>Winners' Prize</h4>
          <p>Little Mister Sunshine Nigeria is a platform that expresses kid talent and beauty of 
          little Boys, advocating and protecting them against child abuse, human trafficking and alleviation
           of kid poverty and welfare. The main objective of this project is to establish a brand ambassador and 
           a face to represent and further drive the master plan of the foundation.</p>
          <ul>
                <li>
                The LITTLE MISTER SUNSHINE NIGERIA 2021 Grand Prize is 1,000,000 Naira cash,
                 A 1-Year Endorsement Contract with the TMIK fashion Magazine, an exclusive photo shoot and a chance to Sponsor 30 indigent Children
                   in Abuja, Back to school.
                </li>
                <li>
                The First and Second runners-up will win 500,000 Naira Cash and 300,000 Naira Cash Respectively
                </li>
               
              </ul>
        </div>
      </div>
      <Cards2 />
      
      {/* <section className='footer-subscription'>
        <img src={img9} alt="winner2021" className="img-body" />
        <h3 className="cards-item-b-text">Akhigbemen Bernadette Ebehireme</h3>
      </section> */}
      <LeadersBoard />
      {/* <div>
      <div className="reg-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          REGISTER NOW! <i className='far fa-play-circle' />
        </Button>
      </div>
    </div> */}
      <CountdownTimer />
      
      <Footer />
    </>
  );
}

export default Home;