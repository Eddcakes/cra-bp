import React, { useEffect } from "react";
import Rules from "../components/Rules";

const About = () => {
  useEffect(() => {
    document.title = `About`;
  }, []);
  return (
    <article>
      <p>About Page</p>
      <div className="container">
        <Rules />
      </div>
    </article>
  );
};

export default About;
