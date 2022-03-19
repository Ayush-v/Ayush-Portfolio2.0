import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProjectBoxes from "../ProjectBoxes";

import blogimg from "../../images/projects/blog website.png";

const ProjectsSection = () => {
  const Projects = () => {
    const skills = [
      {
        title: "Blog Website",
        desc: "React, MongoDB and Express",
        codeLink: "https://github.com/Ayush-v/Blog-Website.git",
        livePreview: "https://ayush-blog-website.herokuapp.com",
        image: blogimg,
      },
    ];

    if (skills.length >= 1) {
      return (
        <>
          {skills.map((index, id) => (
            <ProjectBoxes
              key={id}
              title={index.title}
              description={index.desc}
              image={index.image}
              sourceCode={index.codeLink}
              livePreview={index.livePreview}
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
        <Carousel
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Projects />
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default ProjectsSection;

const Container = styled.div``;

const Wrapper = styled.div`
  overflow: hidden;
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

const Carousel = styled(motion.div)`
  padding-left: 1em;
  overflow: scroll;
  display: flex;
  gap: 20px;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
