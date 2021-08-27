import React from 'react';
import '../Cards.css';
import img1 from '../../assets/images/reg.png'
import img2 from '../../assets/images/vote.png'
import img3 from '../../assets/images/win.png'

import CardItem from '../CardItem';

function Cards2() {
  return (
    <div className='cards'>
    <h1>How to participate</h1>
      <div className='cards__container'>
        <div className='.cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='1. Fill out the registration form with your child details'
              
              path='/'
            />
            <CardItem
              src={img2}
              text='2. Get people to vote for your child'
              
              path='/services'
            />
             <CardItem
              src={img3}
              text='3. Contestant with the highest votes win'
              
              path='/services'
            />
          </ul>
         
        </div>
       
      </div>
    </div>
  );
}

export default Cards2;