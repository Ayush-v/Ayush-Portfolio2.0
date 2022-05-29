import * as React from "react";
import Layout from "../Components/layout";
import AboutSection from "../Components/Sections/AboutSection";
import ContactSection from "../Components/Sections/ContactSection";
import HeroSection from "../Components/Sections/HeroSection";
import ProjectsSection from "../Components/Sections/ProjectsSection";
import ToolsSection from "../Components/Sections/ToolsSection";

const IndexPage = () => {
  return (
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
