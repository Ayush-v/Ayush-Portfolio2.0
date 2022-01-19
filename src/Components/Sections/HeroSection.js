import React from "react";
import styled from "styled-components";

import waves from "/src/images/waves/heroSectionWaves.svg";
import mockup1 from "/src/images/mockups/mockup1.svg";

import mockup2 from "/src/images/mockups/mockup2.svg";

const HeroSection = () => {
  return (
    <Container id="home">
      <Wrapper>
        <Intro>
          <Title>
            Ayush<span>.is()</span>
          </Title>
          <Description>
            Creative FrontEnd Web developer, IOS developer, <br />
            UI/UX Designer
          </Description>
        </Intro>
        <MockupWrapper>
          <MockupLeft src={mockup2} alt="mockup2" />
          <MockupRight src={mockup1} alt="mockup1" />
        </MockupWrapper>
      </Wrapper>
      <BackgroundWave>
        <Waves src={waves} alt="waves" />
      </BackgroundWave>
    </Container>
  );
};

export default HeroSection;

const Container = styled.section`
  position: relative;
  height: 90vh;
  max-height: 800px;
`;
const Wrapper = styled.div`
  margin: 0px 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: left;
  gap: 3em;

  @media only screen and (min-width: 1200px) {
    max-width: 1234px;
    flex-direction: row;
  }
  @media only screen and (min-width: 1300px) {
    margin: 2em auto;
  }
`;

const BackgroundWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 380px;
  z-index: -1;

  @media only screen and (min-width: 1441px) {
    height: 700px;
  }
`;

const Waves = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Intro = styled.div``;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #ebebeb;
  span {
    color: #8361ff;
    letter-spacing: 6px;
  }
`;
const Description = styled.p`
  font-size: 15px;
  opacity: 0.8;
`;

const MockupWrapper = styled.div`
  width: 100%;
  height: auto;
  max-width: 400px;

  position: relative;
  display: flex;
  justify-content: center;

  @media only screen and (max-height: 630px) {
    margin-top: -55px;
  }

  &:hover img {
    transform: rotate(0deg);
  }
`;

const MockupRight = styled.img`
  height: 350px;
  width: auto;
  transform: rotate(10deg);
  transition: transform 0.8s ease;

  @media only screen and (max-width: 1200px), screen and (max-height: 300px) {
    height: 250px;
  }
`;

const MockupLeft = styled.img`
  height: 350px;
  width: auto;
  margin-top: 200px;
  transform: rotate(-6deg);
  transition: transform 0.8s ease;

  @media only screen and (max-width: 1200px), screen and (max-height: 300px) {
    height: 250px;
    margin-top: 30px;
  }
`;
