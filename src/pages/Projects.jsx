import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";
import { projects } from "../components/data/data";

import web from "../assets/web.png";
import Github from "../assets/github.svg";

// glow animation for the year text
const glow = keyframes`
  from {
    text-shadow: 0 0 5px #0ff, 0 0 10px #0ff;
  }
  to {
    text-shadow: 0 0 20px #0ff, 0 0 30px #0ff;
  }
`;

const Conteiner = styled(motion.div)`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1.5rem;
  padding: 1.5rem;
  font-family: "Inconsolata", monospace;
  color: #c3c3c3;
  max-width: 100%;
`;

export const ContainerSlideIn = styled(motion.div)`
  position: relative;
`;

const StyledProject = styled.div`
  width: 20rem;
  color: rgb(195, 195, 195);
`;

const Year = styled.p`
  font-size: 11px;
  font-weight: 700;
  text-align: right;
  margin-top: 6px;
  color: #0ff;
  animation: ${glow} 1.5s ease-in-out infinite alternate;
`;

const Social = styled.img`
  border-radius: 100%;
  width: 22px;
  height: 22px;
  margin-top: 6px;
  cursor: pointer;
`;

const Projects = () => (
  <Conteiner
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    {projects.map((exp, i) => (
      <ContainerSlideIn
        variants={fadeIn("left", "tween", (i + 1) * 0.2, 0.8)}
        key={i}
      >
        <StyledProject>
          <h3 style={{ fontWeight: 400 }}>• {exp.name}</h3>
          <p style={{ fontWeight: 350 }}>{exp.projects}</p>
          <Year>{exp.year}</Year>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "0.5rem",
              marginTop: 5,
            }}
          >
            {exp.url && (
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Social src={Github} alt="GitHub" />
              </a>
            )}
            {exp.web && (
              <a
                href={exp.web}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
              >
                <Social src={web} alt="Live demo" />
              </a>
            )}
          </div>
        </StyledProject>
      </ContainerSlideIn>
    ))}
  </Conteiner>
);

export default Projects;
