import React from "react";
import styled from "styled-components";

const ProjectsSection = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>
          My<span>.projects()</span>
        </Title>
        <p>its coming.....</p>
      </Wrapper>
    </Container>
  );
};

export default ProjectsSection;

const Container = styled.div``;

const Wrapper = styled.div`
  max-width: 1234px;
  margin: 4em 1.5em;

  @media only screen and (min-width: 680px) {
    margin: 6em 5em;
  }
  @media only screen and (min-width: 1300px) {
    margin: 6em auto;
  }
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;

  span {
    color: #8261ff;
    letter-spacing: 6px;
  }
`;
