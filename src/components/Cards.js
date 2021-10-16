import React from 'react';
import './Cards.css';
import WinnerCardItem from './WinnerCardItem';
import img9 from '../assets/images/Winner2020.jpg'
import img2 from '../assets/images/5.jpg'

function Cards() {
  return (
    <div className='cards'>
    
      <h1>Winner Miss Sunshine 2020</h1>
      <div className='cards__container-winner'>
        <div className='.cards__wrapper'>
          <ul className='cards__items'>
            <WinnerCardItem
              src={img9}
              text='Queen Omeima Daniella'
              label='Winner Little Miss Sunshine 2020'
              path='/'
            />
            <WinnerCardItem
              src={img2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <h1 className="cards-item-b-text">Queen Omeima Daniella</h1>
          <h3 className="cards-item-b-text">Winner Little Miss Sunshine Contest 2020</h3>
        
        </div>
       
      </div>
    </div>
  );
}

export default Cards;