import React from "react";
import styled from "styled-components";
import ProjectBoxes from "../ProjectBoxes";

const ProjectsSection = () => {
  const Have = () => {
    const skills = [
      // {
      //   title: "mockup1",
      //   desc: "lorem ipsum1",
      //   image:
      //     "https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/614304047e80ad7837cbde55_iPhone%2013%20Pro%20Mockup2500-1.jpg",
      // },
      // {
      //   title: "lorem2",
      //   desc: "lorem ipsum2",
      //   image:
      //     "https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5e453093913fa86248fa5350_001.jpg",
      // },
      // {
      //   title: "lorem3",
      //   desc: "lorem ipsum3",
      //   image:
      //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      // },
      // {
      //   title: "lorem4",
      //   desc: "lorem ipsum4",
      //   image:
      //     "https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5c02b925747aaa04087bb958_iMac_2.jpg",
      // },
    ];

    if (skills.length >= 1) {
      return (
        <>
          {skills.map((index) => (
            <ProjectBoxes
              key={index.title}
              title={index.title}
              description={index.desc}
              image={index.image}
            />
          ))}
        </>
      );
    } else {
      return <p>Coming soon ....</p>;
    }
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>
          My<span>.projects()</span>
        </Title>
        <Flein>
          <Have />
        </Flein>
      </Wrapper>
    </Container>
  );
};

export default ProjectsSection;

const Container = styled.div`
  .pp {
    color: aqua;
  }
`;

const Wrapper = styled.div`
  max-width: 1234px;
  margin-left: 1.5em;
  margin-right: 1.5em;
  margin-top: 4em;

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

const Flein = styled.div`
  overflow: scroll;
  display: flex;
  gap: 20px;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
