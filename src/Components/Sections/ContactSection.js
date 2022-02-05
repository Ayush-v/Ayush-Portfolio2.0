import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

import poly from "/src/images/others/skillpolygon.svg";

import waves from "/src/images/waves/contactSectionWave.svg";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_elcdcqi",
        "template_7kmkmlr",
        form.current,
        "user_LFGQyZ8x7AhdGDUhy8oDG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container id="contact">
      <Wrapper>
        <TextWrapper>
          <Title>
            Contact<span>.me()</span>
          </Title>
          <Description>
            I'm interested in freelance opportunities-especially ambitious
            orlarge project. However, if you have other request or question,
            don't hesitate to use the form
          </Description>
          <p>or</p>
          <Mail>
            <div>
              <img src={poly} alt="poly" />
              <p className="email-hover">ayushverma1194@gmail.com</p>
            </div>
            <svg
              width="15"
              height="21"
              viewBox="0 0 15 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                navigator.clipboard.writeText("ayushverma1194@gmail.com")
              }
              className="copyText"
            >
              <path
                d="M3.85181 4.66892H5.15378V2.70861C5.15378 2.3292 5.24117 2.03585 5.41597 1.82856C5.59077 1.62129 5.84996 1.51766 6.19353 1.51766H9.26761V5.58586C9.26761 6.08472 9.3746 6.45887 9.58858 6.70831C9.80256 6.95774 10.1205 7.08245 10.5424 7.08245H13.6888V14.0068C13.6888 14.3862 13.6014 14.6796 13.4266 14.8868C13.2518 15.0941 12.9957 15.1978 12.6581 15.1978H11.3381V16.7154H12.7214C13.4809 16.7154 14.0505 16.4923 14.4302 16.0462C14.81 15.6 14.9998 14.9272 14.9998 14.0279V7.51456C14.9998 6.9384 14.9426 6.45184 14.8281 6.05485C14.7135 5.65787 14.5116 5.28724 14.2223 4.94296L10.8318 0.906381C10.5545 0.57615 10.2471 0.342525 9.90954 0.205506C9.572 0.0685013 9.18924 0 8.76128 0H6.1212C5.36172 0 4.79362 0.22484 4.4169 0.674519C4.04017 1.1242 3.85181 1.7952 3.85181 2.68752V4.66892ZM10.4339 5.354V2.21327L13.3724 5.72286H10.7504C10.5394 5.72286 10.4339 5.59991 10.4339 5.354Z"
                fill="white"
              />
              <path
                d="M0.41626 18.2227C0.41626 19.1221 0.604623 19.7948 0.98135 20.241C1.35807 20.6872 1.92617 20.9103 2.68565 20.9103H9.28586C10.0453 20.9103 10.6149 20.6854 10.9947 20.2357C11.3744 19.7861 11.5643 19.115 11.5643 18.2227V11.9307C11.5643 11.3475 11.5206 10.8926 11.4332 10.5659C11.3458 10.2392 11.1454 9.8896 10.8319 9.5172L7.07977 5.0485C6.78441 4.69016 6.49509 4.4583 6.2118 4.35291C5.92849 4.24752 5.56985 4.19482 5.13586 4.19482H2.68565C1.92617 4.19482 1.35807 4.41966 0.98135 4.86934C0.604623 5.31902 0.41626 5.99002 0.41626 6.88235V18.2227ZM1.71822 18.2016V6.90344C1.71822 6.52402 1.80562 6.23067 1.98042 6.02339C2.15522 5.81612 2.41441 5.71248 2.75798 5.71248H4.91886V10.392C4.91886 10.947 5.03791 11.3616 5.276 11.6356C5.5141 11.9096 5.86822 12.0466 6.33836 12.0466H10.2533V18.2016C10.2533 18.581 10.1674 18.8744 9.9956 19.0817C9.82382 19.2889 9.56614 19.3926 9.22257 19.3926H2.74894C2.41139 19.3926 2.15522 19.2889 1.98042 19.0817C1.80562 18.8744 1.71822 18.581 1.71822 18.2016ZM6.49207 10.6344C6.25097 10.6344 6.13042 10.4938 6.13042 10.2128V6.00759L10.0092 10.6344H6.49207Z"
                fill="white"
              />
            </svg>
          </Mail>
        </TextWrapper>
        <Form ref={form} onSubmit={sendEmail} autoComplete="off">
          <InputDiv>
            <Input type="text" name="name" required />
            <Label>Name</Label>
          </InputDiv>

          <InputDiv>
            <Input type="email" name="email" required />
            <Label>Email</Label>
          </InputDiv>

          <InputDiv>
            <TextArea
              type="message"
              name="message"
              autoComplete="off"
              required
            />
            <TLabel>Message</TLabel>
          </InputDiv>

          <SubmitDiv>
            <SubmitButton type="submit" value="Send Message!" />
          </SubmitDiv>
        </Form>
      </Wrapper>
      <BackgroundWave>
        <Waves src={waves} alt="waves" />
      </BackgroundWave>
    </Container>
  );
};

export default ContactSection;

const Container = styled.div`
  position: relative;
  height: 90vh;
  max-height: 800px;

  @media only screen and (max-height: 450px) {
    height: auto;
  }
`;

const BackgroundWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 393px;
  z-index: -1;
  margin-bottom: 20px;

  @media only screen and (min-width: 1441px) {
    height: 700px;
  }
`;

const Waves = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

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

const TextWrapper = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  opacity: 0.9;

  background: -webkit-linear-gradient(47deg, #ffffff, #8261ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Mail = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  div {
    display: flex;
    gap: 12px;
  }

  .copyText {
    cursor: pointer;

    &:active {
      opacity: 0.7;
    }
  }

  .email-hover {
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

const Form = styled.form`
  margin-top: 2em;
  max-width: 500px;
`;

const InputDiv = styled.div`
  position: relative;
  margin-bottom: 30px;

  input:focus {
    border-color: #8261ff;
  }

  textarea:focus {
    border-color: #8261ff;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -22px;
    font-size: 14px;
    color: #8261ff;
  }
  textarea:focus ~ label,
  textarea:valid ~ label {
    top: -22px;
    font-size: 14px;
    color: #8261ff;
  }

  input:not(:disabled):not([type="submit"]):focus ~ label {
    top: -22px;
    font-size: 14px;
    /* color: #8261ff; */
  }
  textarea:not(:disabled):not([type="submit"]):focus ~ label {
    top: -22px;
    font-size: 14px;
    color: #8261ff;
  }
`;

const Input = styled.input`
  font-size: 14px;
  padding: 10px 10px 10px 10px;
  display: block;
  width: 100%;
  background: none;
  border: none;
  border: 1px solid #757575;
  color: white;
  border-radius: 7px;
  outline: none;
`;
const Label = styled.label`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 8px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

const TextArea = styled.textarea`
  font-size: 14px;
  padding: 10px 10px 10px 10px;
  display: block;
  width: 100%;
  height: 100px;
  background: none;
  border: none;
  border: 1px solid #757575;
  color: white;
  border-radius: 7px;

  &:focus {
    outline: none;
  }
`;

const TLabel = styled.label`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 8px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

const SubmitDiv = styled.div`
  width: 150px;
  height: 50px;
`;

const SubmitButton = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 9px;
  border: 0.1px solid #8261ff;
  background: none;
  color: white;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #8261ff;
    border: 0.1px solid #8261ff;
    color: white;
  }
`;
