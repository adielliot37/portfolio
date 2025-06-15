import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";
import { Link } from "react-router-dom";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2rem;
  overflow-y: auto;
  font-family: "Inconsolata", monospace;
  color: #c3c3c3;
  background: #111;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #0ff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Category = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #0ff;
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
`;

const Item = styled.li`
  margin-bottom: 0.25rem;
`;

const Skills = () => {
  const skills = {
    Languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Solidity",
      "Rust",
      "Python",
      "Move",
      "Go",
      "C/C++"
    ],
    "Frameworks & Tools": [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Hardhat",
      "Foundry",
      "Truffle",
      "Remix",
      "ethers.js",
      "web3.js",
      "OpenZeppelin",
      "PostgreSQL",
      "MongoDB",
      "AWS"
    ],
    "Web3 & Blockchain": [
      "Ethereum (L1/L2)",
      "Solana",
      "Filecoin / IPFS",
      "Chainlink Oracles",
      "API3 & Band Protocol",
      "zkSNARKs / FHE",
      "Optimistic Oracle Protocols",
      "Quantitative Trading Strategies",
      "TokenMetrics API",
      "TA Indicators (RSI, MACD, Bollinger Bands)",
      "Kelly Criterion Risk Management",
      "UCAN Delegation",
      "Smart Contracts",
      "AI Agents"
    ],
    "Soft Skills": [
      "Leadership",
      "Communication",
      "Creative Problem Solving",
      "Time Management",
      "Collaboration",
      "Adaptability"
    ]
  };

  return (
    <Container
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <BackLink to="/">← Home</BackLink>
      {Object.entries(skills).map(([category, list]) => (
        <Category key={category}>
          <Title>{category}</Title>
          <List>
            {list.map((skill) => (
              <Item key={skill}>{skill}</Item>
            ))}
          </List>
        </Category>
      ))}
    </Container>
  );
};

export default Skills;
