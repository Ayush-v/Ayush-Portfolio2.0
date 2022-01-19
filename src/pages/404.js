import * as React from "react";
import { Link } from "gatsby";
// import styled from "styled-components";

// styles
const pageStyles = {
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const goHome = {
  margin: 0,
  color: "#8261FF",
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found 404</h1>
      <p style={paragraphStyles}>
        Sorry
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>
        I couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/" className={goHome}>
          Go home
        </Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
