import React from 'react'
import './Prizes.css'
import '../Footer.css'
import img1 from '../../assets/images/1stPrice@2x.png';
import img2 from '../../assets/images/2ndPrize@2x.png';
import img3 from '../../assets/images/3rdPrize@2x.png';


function Prizes() {
    return (
        <div className='prizes-container'>
              
      <div class='prizes-links'>
        <div className='prizes-link-wrapper'>
          <div class='prizes-link-items'>
            <img src={img1} alt="img1" width="180" height="300" className='img-mob1' />
          </div>
          <div class='prizes-link-items'>
          <img src={img2} alt="img1" width="180" height="220" className='img-mob2' />
          </div>
          <div class='prizes-link-items'>
          <img src={img3} alt="img1" width="150" height="200" className='img-mob' />
          </div>
        </div>
        <div className='prizes-link-wrapper'>
          
         
        </div>
        
      </div>
      <h2>And lots of consolations prizes to be won!</h2>
    </div>
    )
}

export default Prizes;
