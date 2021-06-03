import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Carousel from './Carousel';

const Wrapper = styled.section`
  background: linear-gradient(to right, #f9f1e7 60%, #fcf8f3 0%);
  height: 100vh;
  display: flex;
  align-items: end;
`;

const SliderWrapper = styled.div`
  //height: 500px;
  width: 100%;
`;

const HeroWrapper = styled.div`
  width: 400px;
  position: absolute;
  left: 100px;
  top: 230px;
  padding: 53px;
  background: rgba(255, 255, 255, 0.45);
  //box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const HeroContent = styled.div`
  height: 100%;
`;

const HeroTitle = styled.h1`
  color: #3a3a3a;
`;

const HeroDescription = styled.p`
  color: #898989;
`;

const Banner = () => {
  return (
    <Wrapper>
      <SliderWrapper>
        <Carousel />
      </SliderWrapper>
      <HeroWrapper>
        <HeroContent>
          <HeroTitle>High-Quality Furniture Just For You</HeroTitle>
          <HeroDescription>
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </HeroDescription>
          <Button color="#E89F71">Shop Now</Button>
        </HeroContent>
      </HeroWrapper>
    </Wrapper>
  );
};

export default Banner;
