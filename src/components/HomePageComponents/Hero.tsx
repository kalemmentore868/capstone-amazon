import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import heroList from '../../helper/heroData';


const Hero = () => {
    return (
        <div className='h-100 text-center'>
            <Carousel className="w-100 mx-auto" >

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