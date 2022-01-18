import React from "react";
import styled from "styled-components";

import mail from "/src/images/others/emailIcon.svg";
import insta from "/src/images/others/insta.svg";
import github from "/src/images/others/github.svg";

const Footer = () => {
  return (
    <Container>
      <LeftSide>
        <p>Designed & Created by</p>
        <p>Ayush 🤟🏻 2022</p>
      </LeftSide>
      <RightSide>
        <a href="/">
          <img src={mail} alt="instagram" />
        </a>
        <a href="/">
          <img src={insta} alt="instagram" />
        </a>
        <a href="/">
          <img src={github} alt="github" />
        </a>
      </RightSide>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  margin: 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 1200px) {
    margin: 1.5em 5em;
  }

  @media only screen and (max-height: 630px) {
    margin-top: 250px;
  }
`;
const LeftSide = styled.div``;
const RightSide = styled.div`
  display: flex;
  gap: 16px;

  a {
    margin: 0;
  }
`;
