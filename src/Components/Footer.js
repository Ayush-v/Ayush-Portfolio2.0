import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <LeftSide>
        <p>Designed & Created by</p>
        <p>Ayush 🤟🏻 2022</p>
      </LeftSide>
      <RightSide>insta</RightSide>
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
`;
const LeftSide = styled.div``;
const RightSide = styled.div``;
