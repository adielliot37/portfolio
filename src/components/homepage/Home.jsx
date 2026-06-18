import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Now from "./Now";
import About from "./About";
import Experience from "../../pages/Experience";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";
import Contact from "../../pages/Contact";

const Page = styled.div`
  max-width: var(--measure);
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 0;
  flex-wrap: wrap;

  a {
    font-family: var(--sans);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--muted);
    transition: color 0.15s ease;
  }

  a:hover {
    color: var(--ink);
  }
`;

const NavName = styled.span`
  font-family: var(--sans);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--ink);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
`;

const Hero = styled.header`
  padding: 3.5rem 0 1rem;
`;

const Name = styled.h1`
  font-family: var(--serif);
  font-size: clamp(2.6rem, 7vw, 3.6rem);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
`;

const Role = styled.p`
  font-family: var(--serif);
  font-size: 1.3rem;
  font-weight: 400;
  font-style: italic;
  color: var(--ink);
  margin-bottom: 1.25rem;
`;

const Intro = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--muted);
  max-width: 34rem;
`;

const Footer = styled.footer`
  padding-top: 3.25rem;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
  font-family: var(--sans);
  font-size: 0.78rem;
  color: var(--muted);

  a:hover {
    color: var(--ink);
  }
`;

const Home = () => {
  return (
    <Page>
      <Nav>
        <NavName>Aditya Chaplot</NavName>
        <NavLinks>
          <a href="#now">Now</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </Nav>

      <Hero>
        <Name>Aditya Chaplot</Name>
        <Role>Blockchain engineer</Role>
        <Intro>
          I build systems that live on-chain — smart contracts, backends, and
          the infrastructure around them. Currently leading the blockchain
          division at NaXum, and building Yieldo, a yield-distribution platform,
          on the side.
        </Intro>
      </Hero>

      <Now />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />

      <Footer>
        <span>© 2026 Aditya Chaplot</span>
        <Link to="/ink">3301</Link>
      </Footer>
    </Page>
  );
};

export default Home;
