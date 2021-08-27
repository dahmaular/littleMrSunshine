import React from 'react'
import '../Cards.css';
import CardItem from '../CardItem';
import img3 from '../../assets/images/win.png'
import img1 from '../../assets/images/reg.png'
import img2 from '../../assets/images/vote.png'

export const ContestantCard = () => {
    return (
        <div className='cards'>
      <h1>Contestants</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Register'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Vote'
              path='/products'
            />
            <CardItem
              src={img3}
              text='Win'
              path='/sign-up'
            />
            <CardItem
              src={img3}
              text='Ride through the Sahara Desert on a guided camel tour'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    )
}
