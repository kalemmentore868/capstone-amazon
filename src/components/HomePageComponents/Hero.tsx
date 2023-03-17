import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import '../../assets/css/HeroCarousel.css';
// @ts-ignore
import food1 from "../../assets/img/fast-food1.jpg";
// @ts-ignore
import food2 from "../../assets/img/fast-food2.jpg";
// @ts-ignore
import food3 from "../../assets/img/fast-food3.jpg";



const HeroCarousel = () => {
    const style1 = { background: `url(${food1}) no-repeat center center fixed`, backgroundSize: "cover" }
    const style2 = { background: `url(${food2}) no-repeat center center fixed`, backgroundSize: "cover" }
    const style3 = { background: `url(${food3}) no-repeat center center fixed`, backgroundSize: "cover" }
    return (
        <Carousel fade controls={false}>
            <Carousel.Item>
                <div className="slide1" style={style1} />
                <Container className="overlay-text">
                    <h1>WTE Food Service</h1>
                    <Button variant="success">Order Now</Button>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slide2" style={style2} />
                <Container className="overlay-text">
                    <h1>WTE Food Service</h1>
                    <Button variant="success">Order Now</Button>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slide3" style={style3} />
                <Container className="overlay-text">
                    <h1>WTE Food Service</h1>
                    <Button variant="success">Order Now</Button>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
};

export default HeroCarousel;