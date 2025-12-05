import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
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

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1200px) {
    padding: 3rem;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CategoryCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid #222;
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #333;
    transform: translateY(-2px);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #222;
`;

const CategoryIcon = styled.span`
  font-size: 1.5rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #00ffc8;
  margin: 0;
  letter-spacing: 0.05em;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.75rem;
  font-size: 0.8rem;
  color: #bbb;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #00ffc8;
    border-color: rgba(0, 255, 200, 0.3);
    background: rgba(0, 255, 200, 0.05);
  }
`;

const AchievementsSection = styled.div`
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid #222;
`;

const AchievementsTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 200;
  color: #fff;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
`;

const AchievementsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AchievementCard = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(20, 20, 20, 0.4);
  border: 1px solid #1a1a1a;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #00ffc8;
    background: rgba(0, 255, 200, 0.02);
  }
`;

const AchievementIcon = styled.span`
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const AchievementContent = styled.div``;

const AchievementTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.25rem 0;
`;

const AchievementDescription = styled.p`
  font-size: 0.8rem;
  color: #888;
  margin: 0;
  line-height: 1.5;
`;

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "⌨️",
      skills: ["JavaScript", "TypeScript", "Solidity", "Rust", "Python", "Move", "Go", "C/C++", "YUL", "Assembly"]
    },
    {
      title: "Frameworks & Tools",
      icon: "🛠️",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Hardhat", "Foundry", "ethers.js", "web3.js", "CI/CD"]
    },
    {
      title: "Blockchain & Web3",
      icon: "⛓️",
      skills: ["Ethereum L1/L2", "Solana", "Filecoin/IPFS", "Multi-chain (20+ EVMs)", "Smart Contracts", "zkSNARKs", "FHE"]
    },
    {
      title: "Smart Contract Engineering",
      icon: "📜",
      skills: ["Contract Verification", "Gas Optimization", "Security Auditing", "Bug Bounty", "Multisig (Safe)", "Anchor"]
    },
    {
      title: "Trading & Quant",
      icon: "📈",
      skills: ["Trading Algorithms", "Risk Management", "TA Indicators", "TokenMetrics", "CEX/DEX Integration", "AI Agents"]
    },
    {
      title: "Infrastructure",
      icon: "🏗️",
      skills: ["Arduino/RaspberryPi", "IoT", "Robotics", "Oracle Protocols", "Chainlink", "API3", "Helius"]
    }
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "ETHGlobal Istanbul 2023",
      description: "Won $7,500 bounty for PixelPals project"
    },
    {
      icon: "🎯",
      title: "ETHGlobal Singapore 2024",
      description: "Hackathon winner"
    },
    {
      icon: "🥇",
      title: "ETHGlobal Bangkok 2024",
      description: "Hackathon winner"
    },
    {
      icon: "🌏",
      title: "Consensus Hong Kong 2025",
      description: "Hackathon winner"
    },
    {
      icon: "🚀",
      title: "Endgame Hackathon, Austin TX",
      description: "Won $3,000 bounty for ArithmoAI"
    },
    {
      icon: "💰",
      title: "Grants & Funding",
      description: "Raised $500K+ in grants and VC funding"
    },
    {
      icon: "🔐",
      title: "Solana CTF",
      description: "Top 10 worldwide @solctf"
    },
    {
      icon: "📊",
      title: "Scale Achievement",
      description: "Built systems serving 100K+ users"
    }
  ];

  return (
    <Container
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <Header>
        <Title>Skills & Expertise</Title>
        <Subtitle>Technologies I work with</Subtitle>
      </Header>
      
      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <CategoryCard
            key={category.title}
            variants={fadeIn("up", "tween", index * 0.1, 0.4)}
          >
            <CategoryHeader>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryHeader>
            <SkillsList>
              {category.skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </SkillsList>
          </CategoryCard>
        ))}
      </SkillsGrid>

      <AchievementsSection>
        <AchievementsTitle>🏅 Notable Achievements</AchievementsTitle>
        <AchievementsList>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              variants={fadeIn("up", "tween", 0.5 + index * 0.08, 0.4)}
            >
              <AchievementIcon>{achievement.icon}</AchievementIcon>
              <AchievementContent>
                <AchievementTitle>{achievement.title}</AchievementTitle>
                <AchievementDescription>{achievement.description}</AchievementDescription>
              </AchievementContent>
            </AchievementCard>
          ))}
        </AchievementsList>
      </AchievementsSection>
    </Container>
  );
};

export default Skills;
