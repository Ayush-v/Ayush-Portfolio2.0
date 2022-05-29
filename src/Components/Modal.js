import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Modal = ({ closeModal, title, image, sourceCode, livePreview, desc }) => {
  const containerVarients = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        // stiffness: 70,
        duration: 0.5,
      },
    },
  };

  const bgVarient = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const modalRef = useRef();

  const modalBackClose = (e) => {
    if (modalRef.current === e.target) {
      closeModal(false);
    }
  };

  return (
    <>
      <Container
        ref={modalRef}
        onClick={modalBackClose}
        variants={bgVarient}
        initial="hidden"
        animate="visible"
      >
        <Wrapper>
          <ModalBackground variants={containerVarients}>
            <ModalHeader>
              <h2>{title}</h2>
              <CloseButton
                onClick={() => {
                  closeModal(false);
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.237967 12.7567C0.403494 12.9154 0.603517 12.9947 0.838035 12.9947C1.07255 12.9947 1.26913 12.9154 1.42776 12.7567L6.49735 7.67679L11.5773 12.7567C11.7359 12.9154 11.9325 12.9964 12.167 12.9999C12.4015 13.0033 12.5981 12.9223 12.7567 12.7567C12.9154 12.5912 12.9947 12.3929 12.9947 12.1618C12.9947 11.9308 12.9154 11.7359 12.7567 11.5773L7.67681 6.49734L12.7567 1.42774C12.9154 1.26222 12.9964 1.0622 12.9999 0.827678C13.0033 0.593175 12.9223 0.396598 12.7567 0.237951C12.5912 0.079317 12.3929 0 12.1618 0C11.9308 0 11.7359 0.079317 11.5773 0.237951L6.49735 5.31788L1.42776 0.237951C1.26913 0.079317 1.07083 0 0.832864 0C0.5949 0 0.396601 0.079317 0.237967 0.237951C0.0793223 0.403492 0 0.601791 0 0.832848C0 1.06392 0.0793223 1.26222 0.237967 1.42774L5.3179 6.49734L0.237967 11.5773C0.0793223 11.7359 0 11.9325 0 12.167C0 12.4015 0.0793223 12.5981 0.237967 12.7567Z"
                    fill="white"
                  />
                </svg>
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <img src={image} alt="img" />
              <div className="div">
                <a href={sourceCode} target="_blank" rel="noreferrer">
                  Source Code
                </a>
                <a href={livePreview} target="_blank" rel="noreferrer">
                  Live Preview
                </a>
              </div>

              <Description>{desc}</Description>
            </ModalBody>
          </ModalBackground>
        </Wrapper>
      </Container>
    </>
  );
};

export default Modal;

const Container = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const Wrapper = styled.div``;

const ModalBackground = styled(motion.div)`
  position: relative;
  width: 380px;
  /* height: 450px; */
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(40px);
  box-shadow: 0px 2px 25px rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @-moz-document url-prefix() {
    & {
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0.5em;
`;

const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  transition: transform 500ms cubic-bezier(0.57, 2.2, 0.26, 0.99);
  :hover {
    transform: scale(1.1);
  }
`;

const ModalBody = styled.div`
  margin: 1em 0.5em;
  img {
    margin: 0 auto;
    border-radius: 12px;
    /* width: 100%; */
    margin-bottom: 20px;
    background-color: wheat;
  }

  .div {
    margin: 1em 0.5em;
  }

  a {
    margin: 0 10px 0 0;
    padding: 5px 12px;
    border: 1px solid #8361ff;
    border-radius: 8px;
    transition: all 500ms cubic-bezier(0.57, 2.2, 0.26, 0.99);

    :hover {
      background: rgba(131, 97, 255, 1);
      border: none;
      transform: scale(1.1);
    }
  }
`;

const Description = styled.p`
  margin: 1em 0.5em;
`;
