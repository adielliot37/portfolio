import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../data/motion';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const AboutContainer = styled(motion.div)`
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  font-family: "Inconsolata", monospace;

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

  @media (min-width: 768px) {
    padding: 2rem;
    padding-left: 1rem;
    justify-content: flex-end;
    align-items: flex-end;
  }

  @media (min-width: 1200px) {
    padding: 3rem;
  }
`;

const ContentWrapper = styled(motion.div)`
  max-width: 100%;
  
  @media (min-width: 768px) {
    max-width: 32rem;
  }

  @media (min-width: 1200px) {
    max-width: 38rem;
  }
`;

const Greeting = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const Wave = styled.span`
  font-size: 1.75rem;
  display: inline-block;
  animation: ${float} 2s ease-in-out infinite;
`;

const Label = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #00ffc8;
  background: rgba(0, 255, 200, 0.1);
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
`;

const Headline = styled.h2`
  font-size: 1.5rem;
  font-weight: 200;
  color: #fff;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  
  span {
    color: #00ffc8;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

const Bio = styled.p`
  font-size: 0.95rem;
  line-height: 1.8;
  color: #aaa;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  color: #e0e0e0;
  font-weight: 500;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 1.5rem;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid #222;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: #00ffc8;
    transform: translateY(-2px);
  }
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #00ffc8;
  margin-bottom: 0.25rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.7rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const About = () => {
  const stats = [
    { number: "3+", label: "Years Exp" },
    { number: "20+", label: "Chains" },
    { number: "$500K+", label: "Grants Raised" },
    { number: "100K+", label: "Users Served" },
  ];

  return (
    <AboutContainer
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <ContentWrapper
        variants={fadeIn("up", "tween", 0.2, 0.6)}
      >
        <Greeting>
          <Wave>👋</Wave>
          <Label>About Me</Label>
        </Greeting>
        
        <Headline>
          Building the <span>decentralized future</span>, one smart contract at a time.
        </Headline>

        <Bio>
          Been messing with electronics and writing C++ on Arduino since I was a kid — 
          before I even knew what "real programming" was. Discovered trading in high school, 
          blew up a few accounts, learned fast.
        </Bio>

        <Bio>
          Then came the <Highlight>Bitcoin whitepaper</Highlight> and everything clicked — 
          peer-to-peer systems, real decentralization, cryptographic truth. That idea hasn't 
          left my head since.
        </Bio>

        <Bio>
          Now I build <Highlight>DeFi bots</Highlight>, <Highlight>zkProof systems</Highlight>, 
          and <Highlight>smart contracts</Highlight> that handle edge-case logic most people 
          don't even think about. I don't just want to build apps — I want to build things 
          that live on-chain, evolve with time, and make people realize, 
          <em style={{ color: '#00ffc8' }}> "oh wow, this wasn't possible before."</em>
        </Bio>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              variants={fadeIn("up", "tween", 0.4 + index * 0.1, 0.4)}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
