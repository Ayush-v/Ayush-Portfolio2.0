import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Modal from "./Modal";

const ProjectBoxes = ({
  image,
  title,
  description,
  sourceCode,
  livePreview,
}) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [openModal]);

  return (
    <>
      <Div
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <ProjectDiv>
          <Imgin src={image} alt="img" />
          <BottomDiv>
            <div>
              <SubTitle>{title}</SubTitle>
              <SubDescription>{description}</SubDescription>
            </div>
            <Arrow className="arrow">
              <svg
                width="23"
                height="16"
                viewBox="0 0 23 16"
                fill="none"
                className="arrow"
              >
                <path
                  d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM0 9H22V7H0V9Z"
                  fill="white"
                />
              </svg>
            </Arrow>
          </BottomDiv>
        </ProjectDiv>
      </Div>
      {openModal ? (
        <Modal
          closeModal={setOpenModal}
          title={title}
          image={image}
          sourceCode={sourceCode}
          livePreview={livePreview}
          desc={description}
        />
      ) : null}
    </>
  );
};

export default ProjectBoxes;

const Div = styled.div`
  margin-top: 1rem;
  transition: all 3s ease-in-out;
`;

const ProjectDiv = styled.div`
  width: 280px;
  transition: all 500ms cubic-bezier(0.57, 2.2, 0.26, 0.99);
  :hover {
    transform: translate(-2px, -2px);

    .arrow {
      transform: rotate(-10deg);
    }
  }
`;

const Imgin = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 12px;
`;

const SubTitle = styled.h3`
  margin-top: 5px;
`;

const SubDescription = styled.p`
  opacity: 0.7;
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

const Arrow = styled.div`
  margin-right: 2px;
  width: 34px;
  height: 34px;
  background: rgba(255, 249, 249, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
`;
