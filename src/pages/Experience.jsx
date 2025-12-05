import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
    padding-left: 18rem;
  }

  @media (min-width: 1200px) {
    padding: 3rem;
    padding-left: 20rem;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 200;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #00ffc8, #00d4ff, #00ffc8);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;

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

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #00ffc8 0%, #00d4ff 50%, transparent 100%);
    
    @media (min-width: 768px) {
      left: 8px;
    }
  }
`;

const ExperienceCard = styled(motion.div)`
  position: relative;
  padding-left: 1.5rem;
  padding-bottom: 2rem;
  
  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #0d0d0d;
    border: 2px solid #00ffc8;
    z-index: 1;
    
    @media (min-width: 768px) {
      left: 3px;
    }
  }

  @media (min-width: 768px) {
    padding-left: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

const CardInner = styled.div`
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid #222;
  border-radius: 12px;
  padding: 1.25rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    border-color: #00ffc8;
    background: rgba(0, 255, 200, 0.03);
    transform: translateX(4px);
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const CompanyRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Company = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const DateBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: #00ffc8;
  padding: 0.25rem 0.6rem;
  background: rgba(0, 255, 200, 0.1);
  border-radius: 20px;
  white-space: nowrap;
  
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: #00ffc8;
    border-radius: 50%;
    animation: ${pulse} 2s infinite;
  }
`;

const Role = styled.h4`
  font-size: 0.9rem;
  font-weight: 400;
  color: #00d4ff;
  margin: 0 0 1rem 0;
  letter-spacing: 0.02em;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BulletItem = styled.li`
  position: relative;
  padding-left: 1.2rem;
  margin-bottom: 0.6rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #aaa;
  
  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #00ffc8;
  }
  
  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const experiences = [
  {
    company: "MERCLE",
    role: "Lead Blockchain & Backend Developer",
    date: "Jul 2025 - Present",
    current: true,
    bullets: [
      "Built GPU-accelerated encryption and Merkle-proof systems, and developed production-grade Solana token/program contracts.",
      "Led deployment and ongoing maintenance of these contracts, collaborating with external auditors and resolving audit findings for secure production releases."
    ]
  },
  {
    company: "PLDG (Protocol Labs | Filecoin)",
    role: "OSS Contributor",
    date: "Oct 2024 - Present",
    current: true,
    bullets: [
      "Contributing across 10+ projects in the Filecoin ecosystem, primarily around decentralized storage workflows.",
      "Reviewed security issues and bug bounty submissions, implementing necessary fixes.",
      "Wrote integration guides, onboarding docs, and example scripts to speed up developer adoption."
    ]
  },
  {
    company: "ZkAGI",
    role: "Core Web3 Developer",
    date: "Mar 2024 - Jul 2025",
    current: false,
    bullets: [
      "Developed decentralized GPU clusters using zkSNARKs for cryptographic computations.",
      "Built Quant Trading Agents, Smart Contracts, and Launchpad BOT."
    ]
  },
  {
    company: "GDSC IIITV",
    role: "Cyber Security Volunteer",
    date: "Oct 2022 - Aug 2023",
    current: false,
    bullets: [
      "Organized workshops and hackathons to promote cybersecurity awareness among students."
    ]
  },
  {
    company: "Freelancing",
    role: "Robotics & Web3/Backend Developer",
    date: "Jan 2021 - Jan 2023",
    current: false,
    bullets: [
      "Built multiple personal and freelance projects across IoT, robotics, and blockchain domains."
    ]
  }
];

const Experience = () => {
  return (
    <Container
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <Header>
        <Title>Experience</Title>
        <Subtitle>My Professional Journey</Subtitle>
      </Header>
      
      <Timeline>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            variants={fadeIn("up", "tween", index * 0.15, 0.5)}
          >
            <CardInner>
              <CompanyRow>
                <Company>{exp.company}</Company>
                <DateBadge>{exp.date}</DateBadge>
              </CompanyRow>
              <Role>{exp.role}</Role>
              <BulletList>
                {exp.bullets.map((bullet, i) => (
                  <BulletItem key={i}>{bullet}</BulletItem>
                ))}
              </BulletList>
            </CardInner>
          </ExperienceCard>
        ))}
      </Timeline>
    </Container>
  );
};

export default Experience;
