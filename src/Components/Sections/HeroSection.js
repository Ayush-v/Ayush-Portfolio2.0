import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";

import waves from "/src/images/waves/heroSectionWaves.svg";
import codingAnimation from "../../images/lotties/coding.json";
import { motion } from "framer-motion";

const HeroSection = () => {
  const container = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: codingAnimation,
    });

    return () => instance.destroy();
  }, []);

  const containerVarients = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };
  const childVarients = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <Container id="home">
      <Wrapper>
        <Intro variants={containerVarients} initial="hidden" animate="visible">
          <Title>
            Ayush<span>.is()</span>
          </Title>
          <Description>
            Creative FrontEnd Web developer, IOS developer, <br />
            UI/UX Designer
          </Description>
        </Intro>
        <motion.div variants={childVarients} initial="hidden" animate="visible">
          <AnimaLottie ref={container}></AnimaLottie>
        </motion.div>
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
  gap: 100px;

  @media only screen and (min-width: 680px) {
    margin: 0px 5em;
  }

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

const Intro = styled(motion.div)``;

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

const AnimaLottie = styled.div``;
