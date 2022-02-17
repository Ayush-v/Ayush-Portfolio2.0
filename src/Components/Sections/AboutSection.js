import React from "react";
import styled from "styled-components";

import waves from "/src/images/waves/AboutSectionWaves.svg";
import profileBlob from "/src/images/profileBlob/profileBlob.svg";
import dots from "/src/images/others/dots.svg";
import insta from "/src/images/others/insta.svg";
import github from "/src/images/others/github.svg";
import linkedin from "/src/images/others/linkedin.svg";

const AboutSection = () => {
  return (
    <Container id="about">
      <Wrapper>
        <TextWrapper>
          <Title>
            About<span>.me()</span>
          </Title>
          <Description>
            Self Taught UI/UX Designer and specialize in IOS Development and
            Front-End Web Development
          </Description>
          <Description>
            Currently Im persuing my Bachelors Degree in Computer Application
            from
            <strong> Panjab University, Chandighar </strong>
          </Description>
          <Description>
            Started as a designer desigining websites & mobile apps. started
            coding for fun but then fell in love with it from then onwards i
            just love coverting my designs into reality.
          </Description>
          <ButtonWrapper>
            <ButtonResume>
              <a href="https://drive.google.com/file/d/1RZeqS9crAxdKu5Dn-1WWZnTzxZCueDlV/view?usp=sharing">
                resume
              </a>

              <svg viewBox="0 0 11 13" fill="none" className="resume">
                <path
                  d="M1.99129 12.6732H8.60606C9.23534 12.6732 9.70607 12.5183 10.0182 12.2086C10.3304 11.8989 10.4865 11.4343 10.4865 10.8148V5.14398C10.4865 4.52454 10.3304 4.05996 10.0182 3.75023C9.70607 3.44051 9.23534 3.28564 8.60606 3.28564H7.02059V4.35492H8.59132C8.85679 4.35492 9.06204 4.42498 9.20707 4.56509C9.3521 4.7052 9.42461 4.91537 9.42461 5.1956V10.7632C9.42461 11.0434 9.3521 11.2536 9.20707 11.3937C9.06204 11.5338 8.85679 11.6039 8.59132 11.6039H2.00605C1.74057 11.6039 1.53531 11.5338 1.39029 11.3937C1.24526 11.2536 1.17275 11.0434 1.17275 10.7632V5.1956C1.17275 4.91537 1.24526 4.7052 1.39029 4.56509C1.53531 4.42498 1.74057 4.35492 2.00605 4.35492H3.57677V3.28564H1.99129C1.36693 3.28564 0.897432 3.44051 0.582794 3.75023C0.268158 4.05996 0.11084 4.52454 0.11084 5.14398V10.8148C0.11084 11.4343 0.268158 11.8989 0.582794 12.2086C0.897432 12.5183 1.36693 12.6732 1.99129 12.6732Z"
                  fill="white"
                />
                <path
                  d="M5.2949 8.82373C5.36373 8.82373 5.42887 8.81021 5.49032 8.78317C5.55177 8.75613 5.61446 8.71066 5.67838 8.64675L7.58094 6.82528C7.6891 6.72205 7.74318 6.60652 7.74318 6.47869C7.74318 6.34596 7.69647 6.23534 7.60307 6.14685C7.50966 6.05836 7.39413 6.01412 7.25648 6.01412C7.10899 6.01412 6.99099 6.06819 6.9025 6.17635L6.09133 7.05389L5.78162 7.38574L5.82585 6.50818V0.608722C5.82585 0.466153 5.773 0.344476 5.6673 0.243691C5.56161 0.142917 5.43747 0.0925293 5.2949 0.0925293C5.15725 0.0925293 5.03557 0.142917 4.92987 0.243691C4.82418 0.344476 4.77133 0.466153 4.77133 0.608722V6.50818L4.81558 7.38574L4.50585 7.05389L3.69468 6.17635C3.60127 6.06819 3.48082 6.01412 3.33333 6.01412C3.19076 6.01412 3.07523 6.05836 2.98674 6.14685C2.89825 6.23534 2.854 6.34596 2.854 6.47869C2.854 6.60652 2.90562 6.72205 3.00887 6.82528L4.91143 8.64675C4.98026 8.71066 5.0454 8.75613 5.10686 8.78317C5.16831 8.81021 5.23099 8.82373 5.2949 8.82373Z"
                  fill="white"
                />
              </svg>
            </ButtonResume>
            <ButtonHireme href="/#contact">Hire me</ButtonHireme>
          </ButtonWrapper>
          <FollowWrapper>
            <h3>You can follow me here:</h3>
            <Social>
              <a
                href="https://www.instagram.com/ayush_iosdev/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={insta} alt="instagram" />
              </a>
              <a
                href="https://github.com/Ayush-v"
                rel="noreferrer"
                target="_blank"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="http://www.linkedin.com/in/ayush2711"
                rel="noreferrer"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </Social>
          </FollowWrapper>
        </TextWrapper>
        <BlobProfile src={profileBlob} alt="profilephoto" />
        <Dots src={dots} alt="dots" />
      </Wrapper>

      <BackgroundWave>
        <Waves src={waves} alt="waves" />
      </BackgroundWave>
    </Container>
  );
};

export default AboutSection;

const Container = styled.div`
  position: relative;
  /* height: 90vh; */
  /* max-height: 920px; */
  overflow: hidden;

  @media only screen and (min-width: 1000px) {
    margin-top: 8rem;
  }
`;

const Wrapper = styled.div`
  margin: 60px 1.5em;
  display: flex;
  flex-direction: column;
  gap: 3em;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding-bottom: 80px;

  @media only screen and (min-width: 680px) {
    margin: 60px 5em;
  }

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    max-width: 1234px;
  }

  @media only screen and (min-width: 1300px) {
    margin: 60px auto;
  }
`;

const BackgroundWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 390px;
  z-index: -1;

  @media only screen and (min-width: 1441px) {
    height: auto;
    top: 20px;
  }
`;

const Waves = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  max-width: 470px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;

  span {
    color: #8261ff;
    letter-spacing: 6px;
  }
`;

const Description = styled.p`
  opacity: 0.8;
  font-size: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;

  a {
    margin: 0;
  }
`;

const ButtonResume = styled.a`
  width: 150px;
  height: 50px;
  background-color: #8261ff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;

  .resume {
    width: 16px;
  }
  cursor: pointer;
`;

const ButtonHireme = styled.a`
  width: 150px;
  height: 50px;
  border: 1px solid white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const BlobProfile = styled.img`
  /* width="419" height="426" */

  width: 400px;
  height: 100%;
`;

const Dots = styled.img`
  position: absolute;
  right: -10px;
  bottom: 50%;
  z-index: -2;

  @media only screen and (min-width: 1150px) {
    left: 50%;
    right: 50%;
  }
`;

const FollowWrapper = styled.div`
  h3 {
    font-weight: 400;
  }
`;

const Social = styled.div`
  a {
    margin: 5px 0;
  }

  display: flex;
  gap: 1.5em;
`;
