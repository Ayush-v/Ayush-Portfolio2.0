import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const Modal = ({ closeModal }) => {
  return (
    <ModalBackground>
      <Container>
        <Wrapper>
          <Header>
            <Title>title</Title>
            <Cross onClick={() => closeModal(false)}>
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
            </Cross>
          </Header>
          <Body>
            <Swiper pagination={true} className="mySwiper">
              <SwiperSlide className="slide">Slide 1</SwiperSlide>
              <SwiperSlide className="slide2">Slide 2</SwiperSlide>
            </Swiper>
            <div className="flex">
              <LivePreview>LivePreview</LivePreview>
              <LivePreview>Source Code</LivePreview>
            </div>
            <p>Description</p>
            <Description>
              Pharetra erat dignissim dictum dignissim risus ullamcorper
              pellentesque. Mi montes, leo purus interdum congue imperdiet
              aliquet in. Vivamus facilisis eget quisque sit eget at non, morbi.
              Duis quis eget lectus ac aliquet nunc. Mauris et vulputate gravida
              arcu tortor praesent tristique tincidunt aliquam.
            </Description>
          </Body>
        </Wrapper>
      </Container>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 1.5em;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 4px 10px rgba(130, 97, 255, 0.15);
  backdrop-filter: blur(35px);
  border-radius: 12px;
  overflow: hidden;
`;

const Header = styled.div`
  margin: 24px 24px 10px 24px;
  display: flex;
  justify-content: space-between;
`;

const Cross = styled.button``;

const Title = styled.h2`
  font-weight: 400;
`;

const Body = styled.div`
  margin: 1em 1em;

  .flex {
    display: flex;
    gap: 10px;
  }

  .myswiper {
  }

  .slide {
    height: 150px;
    background-color: aquamarine;
    border-radius: 5px;
  }
  .slide2 {
    height: 150px;
    background-color: maroon;
    border-radius: 5px;
  }
`;

const LivePreview = styled.button`
  color: white;
  margin: 1em 0;
  padding: 6px;
  border: 1px solid purple;
  border-radius: 5px;
`;

const Description = styled.p`
  margin-top: 1em;
`;
