import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";
import { projects } from "../components/data/data";

import web from "../assets/web.png";
import Github from "../assets/github.svg";

const glow = keyframes`
  0%, 100% { 
    text-shadow: 0 0 5px rgba(0, 255, 200, 0.5);
  }
  50% { 
    text-shadow: 0 0 15px rgba(0, 255, 200, 0.8), 0 0 25px rgba(0, 212, 255, 0.4);
  }
`;

const Container = styled(motion.div)`
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  overflow-y: auto;
  font-family: "Inconsolata", monospace;
  color: #e0e0e0;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1200px) {
    padding: 3rem;
  }
`;

const Header = styled.div`
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 200;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.85rem;
  color: #666;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid #222;
  border-radius: 12px;
  padding: 1.25rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    border-color: #00ffc8;
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 255, 200, 0.1);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const ProjectName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1.3;
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-shrink: 0;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 255, 200, 0.1);
    border-color: #00ffc8;
    transform: scale(1.1);
  }
  
  img {
    width: 16px;
    height: 16px;
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }
  
  &:hover img {
    opacity: 1;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: #aaa;
  margin: 0;
  flex: 1;
`;

const ProjectYear = styled.div`
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid #222;
  font-size: 0.75rem;
  font-weight: 600;
  color: #00ffc8;
  animation: ${glow} 3s ease-in-out infinite;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`;

// Remove duplicate projects
const uniqueProjects = projects.filter((project, index, self) =>
  index === self.findIndex((p) => p.name === project.name)
);

const Projects = () => (
  <Container
    variants={staggerContainer}
    initial="hidden"
    animate="show"
  >
    <Header>
      <Title>Projects</Title>
      <Subtitle>What I've been building</Subtitle>
    </Header>

    {uniqueProjects.length > 0 ? (
      <ProjectGrid>
        {uniqueProjects.map((project, i) => (
          <ProjectCard
            key={`${project.name}-${i}`}
            variants={fadeIn("up", "tween", i * 0.08, 0.4)}
          >
            <ProjectHeader>
              <ProjectName>{project.name}</ProjectName>
              <IconsWrapper>
                {project.url && (
                  <IconLink
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    title="View Code"
                  >
                    <img src={Github} alt="" />
                  </IconLink>
                )}
                {project.web && (
                  <IconLink
                    href={project.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    title="Live Demo"
                  >
                    <img src={web} alt="" />
                  </IconLink>
                )}
              </IconsWrapper>
            </ProjectHeader>
            
            <ProjectDescription>{project.projects}</ProjectDescription>
            
            <ProjectYear>{project.year}</ProjectYear>
          </ProjectCard>
        ))}
      </ProjectGrid>
    ) : (
      <EmptyState>No projects to display</EmptyState>
    )}
  </Container>
);

export default Projects;
