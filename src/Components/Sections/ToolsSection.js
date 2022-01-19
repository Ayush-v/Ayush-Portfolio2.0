import React from "react";
import styled from "styled-components";

import poly from "/src/images/others/skillpolygon.svg";

const ToolsSection = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Tools</Title>
        <div>
          <SkillGrid>
            <Skill>
              <img src={poly} alt="poly" />
              <h3>Reactjs</h3>
            </Skill>
            <Skill>
              <img src={poly} alt="poly" />
              <h3>Gatsbyjs</h3>
            </Skill>
            <Skill>
              <img src={poly} alt="poly" />
              <h3>HTML</h3>
            </Skill>
            <Skill>
              <img src={poly} alt="poly" />
              <h3>CSS</h3>
            </Skill>
            <Skill>
              <img src={poly} alt="poly" />
              <h3>JavaScript</h3>
            </Skill>
            <Skill>
              <img src={poly} alt="poly" />
              <h3>SwiftUI</h3>
            </Skill>
            {/* <br /> */}
            <Skill>
              <img src={poly} alt="poly" />
              <h3>Figma</h3>
            </Skill>
            <Skill>
              <img src={poly} alt="poly" />
              <h3>Adobe xd</h3>
            </Skill>
            <Skill>
              <img src={poly} alt="poly" />
              <h3>Sketch</h3>
            </Skill>
            <Skill>
              <img src={poly} alt="poly" />
              <h3>Adobe Illustrator</h3>
            </Skill>
          </SkillGrid>
          <br />
          <Skill>
            <img src={poly} alt="poly" />
            <h3>More Coming Soon...</h3>
          </Skill>
        </div>
      </Wrapper>
    </Container>
  );
};

export default ToolsSection;

const Container = styled.div``;

const Wrapper = styled.div`
  max-width: 1234px;
  margin: 2em 1.5em;

  @media only screen and (min-width: 680px) {
    margin: 24px 5em;
  }

  @media only screen and (min-width: 1300px) {
    margin: 5em auto;
  }
`;

const Title = styled.h1`
  font-weight: 400;
`;

const SkillGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;

  @media only screen and (min-width: 590px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (min-width: 1100px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h3 {
    font-weight: 400;

    & {
      position: relative;
      color: #ecf0f1;
      transition: 0.5s;
    }

    &::after {
      position: absolute;
      content: "";
      top: 100%;
      left: 0%;
      width: 100%;
      height: 3px;
      background: white;
      border-radius: 2px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s;
    }

    &:hover {
      color: #95a5a6;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;
