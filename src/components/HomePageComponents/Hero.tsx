import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

const HeroSection = styled.div`
  background: linear-gradient(to right, red, black, white);
  height: 100vh;
  text-align: center;
  color: white;
   border-radius: 6px;
  padding-left: 15px;
  padding-right: 15px;
  display:flex;
  align-items:center;
`;

const Hero = () => {
    return (
        <HeroSection>
            <Container>
                <h1 className="font-large">Trinizon - Your One-Stop Shop</h1>
                <p>
                    Shop the latest and greatest products from Trinidad and Tobago.
                </p>
                <Button variant="danger">Start Shopping</Button>
            </Container>
        </HeroSection>
    );
};

export default Hero;