import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";

function About() {
  useEffect(() => {
    if (window.location.pathname !== "/") {
      return window.location.pathname === "/";
    }
  }, []);
  return (
    <div>
      <Hero backgroundImage="./background.jpg">
        <section>
          <div className="heading">
            <h1>Coding Skillset</h1>
            <h3 className="cd-headline clip is-full-width">
              <span className="cd-words-wrapper">
                <b className="is-visible"> HTML5</b>
                <b>CSS/BOOTSTRAP</b>
                <b>JAVASCRIPT/JQUERY</b>
                <b>NODE/EXPRESS</b>
                <b>MYSQL/MONGODB</b>
                <b>REACT</b>
              </span>
            </h3>
          </div>
        </section>
      </Hero>
      <Container style={{ marginTop: 30 }}></Container>
    </div>
  );
}

export default About;
