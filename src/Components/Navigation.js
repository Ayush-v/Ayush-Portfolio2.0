import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import logo from "../images/logo/logo.svg";

const Navigation = () => {
  const [isActive, setActive] = useState(false);

  const CloseMenu = () => {
    setActive(false);
  };

  return (
    <>
      <Header>
        <Nav>
          <Logo src={logo} alt="logo" className="logo" />
          <NavContainer className={isActive ? "open-nav" : null}>
            <svg
              onClick={CloseMenu}
              className="close"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4109 9.00002L18.701 1.71002C18.8648 1.51872 18.9504 1.27264 18.9407 1.02096C18.9309 0.769288 18.8266 0.530549 18.6485 0.352454C18.4704 0.17436 18.2317 0.0700268 17.98 0.0603056C17.7283 0.0505845 17.4823 0.136191 17.291 0.300017L10.0009 7.59002L2.71095 0.290017C2.51965 0.126191 2.27357 0.0405852 2.0219 0.0503063C1.77022 0.0600275 1.53148 0.164359 1.35339 0.342454C1.17529 0.520548 1.07096 0.759287 1.06124 1.01096C1.05152 1.26264 1.13712 1.50872 1.30095 1.70002L8.59095 9.00002L1.29095 16.29C1.18627 16.3797 1.10125 16.49 1.04122 16.614C0.981202 16.7381 0.947471 16.8732 0.942151 17.011C0.936832 17.1487 0.960038 17.286 1.01031 17.4143C1.06059 17.5427 1.13685 17.6592 1.2343 17.7567C1.33175 17.8541 1.4483 17.9304 1.57663 17.9807C1.70495 18.0309 1.84228 18.0541 1.98 18.0488C2.11772 18.0435 2.25286 18.0098 2.37692 17.9497C2.50098 17.8897 2.6113 17.8047 2.70095 17.7L10.0009 10.41L17.291 17.7C17.4823 17.8638 17.7283 17.9494 17.98 17.9397C18.2317 17.93 18.4704 17.8257 18.6485 17.6476C18.8266 17.4695 18.9309 17.2307 18.9407 16.9791C18.9504 16.7274 18.8648 16.4813 18.701 16.29L11.4109 9.00002Z"
                fill="white"
              />
            </svg>
            <NavMenu>
              <li>
                <StyledLink
                  to="/#home"
                  className="underline"
                  onClick={CloseMenu}
                >
                  &lt;Home/&gt;
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  to="/#about"
                  className="underline"
                  onClick={CloseMenu}
                >
                  &lt;About/&gt;
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  to="/#projects"
                  className="underline"
                  onClick={CloseMenu}
                >
                  &lt;Projects/&gt;
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  to="/#contact"
                  className="underline"
                  onClick={CloseMenu}
                >
                  &lt;Contact/&gt;
                </StyledLink>
              </li>
            </NavMenu>
            <SocialMenu>
              <SocialLink
                href="https://www.instagram.com/ayush_iosdev/"
                target="_blank"
              >
                <svg viewBox="0 0 24 24" fill="none" className="social-icon">
                  <path
                    d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                    fill="white"
                  />
                  <path
                    d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                    fill="white"
                  />
                  <path
                    d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
                    fill="white"
                  />
                </svg>
              </SocialLink>

              <SocialLink href="https://github.com/Ayush-v" target="_blank">
                <svg viewBox="0 0 24 24" fill="none" className="social-icon">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9989 6.10404e-06C5.37254 6.10404e-06 0 5.37255 0 12.0004C0 17.3022 3.43804 21.7996 8.20651 23.3871C8.8069 23.4969 9.02569 23.1263 9.02569 22.8081C9.02569 22.5237 9.01538 21.7686 9.00948 20.7675C5.67163 21.4924 4.96737 19.1586 4.96737 19.1586C4.4215 17.7722 3.63473 17.4031 3.63473 17.4031C2.5452 16.6591 3.71724 16.6738 3.71724 16.6738C4.9217 16.7585 5.55523 17.9107 5.55523 17.9107C6.62562 19.7443 8.36416 19.2146 9.04779 18.9074C9.15682 18.1324 9.46622 17.6035 9.80951 17.3037C7.14497 17.0009 4.34341 15.971 4.34341 11.3727C4.34341 10.0629 4.8112 8.99181 5.57881 8.15274C5.45505 7.84923 5.04325 6.62931 5.69594 4.97695C5.69594 4.97695 6.7037 4.65429 8.99622 6.20719C9.95316 5.94052 10.9801 5.80792 12.0004 5.8035C13.0192 5.80792 14.0461 5.94052 15.0045 6.20719C17.2956 4.65429 18.3011 4.97695 18.3011 4.97695C18.956 6.62931 18.5442 7.84923 18.4205 8.15274C19.1895 8.99181 19.6544 10.0629 19.6544 11.3727C19.6544 15.9828 16.8484 16.9972 14.175 17.2941C14.606 17.6646 14.9898 18.3969 14.9898 19.5166C14.9898 21.1204 14.975 22.4147 14.975 22.8081C14.975 23.1293 15.1909 23.5028 15.8001 23.3856C20.5649 21.7951 24 17.3007 24 12.0004C24 5.37255 18.6267 6.10404e-06 11.9989 6.10404e-06Z"
                    fill="white"
                  />
                </svg>
              </SocialLink>
              <SocialLink
                href="http://www.linkedin.com/in/ayush2711"
                target="_blank"
              >
                <svg viewBox="0 0 48 48" fill="none" className="social-icon">
                  <path
                    d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4063 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4063 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39063 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39063 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031V40.9031Z"
                    fill="white"
                  />
                </svg>
              </SocialLink>
            </SocialMenu>
          </NavContainer>
          <svg
            className="ham-menu"
            viewBox="0 0 32 22"
            fill="none"
            onClick={() => {
              setActive(true);
            }}
          >
            <line
              x1="17"
              y1="1"
              x2="31"
              y2="1"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="21"
              x2="15"
              y2="21"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="11"
              x2="31"
              y2="11"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </Nav>
      </Header>
    </>
  );
};

export default Navigation;

const Header = styled.header`
  margin: 24px 1.5em;

  @media only screen and (min-width: 1150px) {
    margin: 24px 5em;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .ham-menu {
    width: 32px;
    cursor: pointer;
  }

  .close {
    float: right;
    margin: 2em;
    width: 1.5em;
  }
  @media only screen and (min-width: 1150px) {
    .ham-menu {
      display: none;
    }

    .close {
      display: none;
    }
  }

  .open-nav {
    transform: translateX(0%);
  }
`;

const NavContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background-color: black;
  opacity: 0.9;
  height: 100vh;
  width: 50%;

  z-index: 2;
  text-transform: uppercase;
  transform: translateX(100%);
  transition: transform 0.8s ease;

  @media only screen and (min-width: 1150px) {
    transform: translateX(0%);
    position: relative;
    display: block;
    width: 90%;
    height: auto;
    background: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 8em;

  @media only screen and (min-width: 1150px) {
    width: 100%;
    display: flex;
    justify-content: center;

    margin: 0;
    /* margin-left: 15rem; */
  }

  @media only screen and (min-width: 1401px) {
    margin-right: 6em;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 0.75em 2em;
  /* width: 100%; */
  color: white;
  margin: 1em;

  & {
    position: relative;
    color: #ecf0f1;
    transition: 0.5s;
  }

  &::after {
    position: absolute;
    content: "";
    top: 75%;
    left: 25%;
    width: 50%;
    height: 3px;
    background: white;
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s;
  }

  @media only screen and (max-width: 1150px) {
    &::after {
      background: none;
    }
  }

  &:hover {
    color: #8361ff;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const SocialLink = styled.a`
  margin: 0;

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
`;

const SocialMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 2em;
  gap: 10px;

  .social-icon {
    width: 24px;
  }

  @media only screen and (min-width: 1150px) {
    flex-wrap: nowrap;
    gap: 20px;
  }
`;
