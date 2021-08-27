import React from 'react'
import '../Cards.css';
import CardItem from '../CardItem';
import img3 from '../../assets/images/img-8.jpg'

export const ContestantCard = () => {
    return (
        <div className='cards'>
      <h1>Contestants</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Register'
              path='/services'
            />
            <CardItem
              src={img3}
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
