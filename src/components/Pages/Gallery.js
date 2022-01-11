import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Gallery.css';
import Paginations from '../Table/Paginations';
import slide1 from '../../assets/images/gallerySlide001.jpg';
import slide2 from '../../assets/images/gallerySlide1.jpg';

export default function Gallery() {
  return (
  <>
  <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
                <div>
                    <img src={slide1} alt='slide1' />
                </div>
                <div>
                    <img src={slide2} />
                </div>
                
            </Carousel>
  <Paginations />
  </>
    );
}