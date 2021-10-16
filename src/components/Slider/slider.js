import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'

export default function Sliders() {
    
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
                <div>
                    <img src={slide1} alt='slide1' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={slide2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={slide3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
    )

}
