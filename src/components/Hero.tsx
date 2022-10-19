import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import heroList from '../helper/heroData';


const Hero = () => {
    return (
        <div className='h-100 py-2 text-center'>
            <h1 className='py-2'>Browse Our Products</h1>
            <Carousel className="w-50 mx-auto" variant="dark">

                {heroList.map(obj => {
                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={obj.src}
                                alt={obj.alt}
                            />
                            <Carousel.Caption>
                                <h3>{obj.title}</h3>
                                <p>{obj.desc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Hero