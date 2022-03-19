import * as React from "react";
// import { useEffect, useState } from "react";
import Layout from "../Components/layout";
import AboutSection from "../Components/Sections/AboutSection";
import ContactSection from "../Components/Sections/ContactSection";
import HeroSection from "../Components/Sections/HeroSection";
import ProjectsSection from "../Components/Sections/ProjectsSection";
import ToolsSection from "../Components/Sections/ToolsSection";
// import styled from "styled-components";

const IndexPage = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 0);
  // }, []);

  return (
    // <div>
    //   {loading ? (
    //     <Loader>
    //       <title>Front-End Developer | Ayush</title>
    //       <div id="preloader">
    //         <div id="loader"></div>
    //       </div>
    //     </Loader>
    //   ) : (
    //     <Layout>
    //       <title>Front-End Developer | Ayush</title>
    //       <HeroSection />
    //       <AboutSection />
    //       <ToolsSection />
    //       <ProjectsSection />
    //       <ContactSection />
    //     </Layout>
    //   )}
    // </div>
    <div>
      <Layout>
        <title>Front-End Developer | Ayush</title>
        <HeroSection />
        <AboutSection />
        <ToolsSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </div>
  );
};

export default IndexPage;

// const Loader = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   background-color: black;

//   #preloader {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
//   #loader {
//     display: block;
//     position: relative;
//     left: 50%;
//     top: 50%;
//     width: 150px;
//     height: 150px;
//     margin: -75px 0 0 -75px;
//     border-radius: 50%;
//     border: 3px solid transparent;
//     border-top-color: #f6f6f6;
//     -webkit-animation: spin 2s linear infinite;
//     animation: spin 2s linear infinite;
//   }
//   #loader:before {
//     content: "";
//     position: absolute;
//     top: 5px;
//     left: 5px;
//     right: 5px;
//     bottom: 5px;
//     border-radius: 50%;
//     border: 3px solid transparent;
//     border-top-color: #8261ff;
//     -webkit-animation: spin 3s linear infinite;
//     animation: spin 3s linear infinite;
//   }
//   #loader:after {
//     content: "";
//     position: absolute;
//     top: 15px;
//     left: 15px;
//     right: 15px;
//     bottom: 15px;
//     border-radius: 50%;
//     border: 3px solid transparent;
//     border-top-color: #f6f6f6;
//     -webkit-animation: spin 1.5s linear infinite;
//     animation: spin 1.5s linear infinite;
//   }
//   @-webkit-keyframes spin {
//     0% {
//       -webkit-transform: rotate(0deg);
//       -ms-transform: rotate(0deg);
//       transform: rotate(0deg);
//     }
//     100% {
//       -webkit-transform: rotate(360deg);
//       -ms-transform: rotate(360deg);
//       transform: rotate(360deg);
//     }
//   }
//   @keyframes spin {
//     0% {
//       -webkit-transform: rotate(0deg);
//       -ms-transform: rotate(0deg);
//       transform: rotate(0deg);
//     }
//     100% {
//       -webkit-transform: rotate(360deg);
//       -ms-transform: rotate(360deg);
//       transform: rotate(360deg);
//     }
//   }
// `;
