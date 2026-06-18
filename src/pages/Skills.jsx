import React from "react";
import styled from "styled-components";
import { Section, Eyebrow } from "../components/ui";

const skills = {
  Languages: [
    "TypeScript",
    "JavaScript",
    "Solidity",
    "Rust",
    "Move",
    "Python",
    "Go",
    "C / C++",
  ],
  "Frameworks & Tools": [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Hardhat",
    "Foundry",
    "ethers.js",
    "OpenZeppelin",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
  ],
  "Web3 & Systems": [
    "Ethereum L1 / L2",
    "Base",
    "Solana",
    "Filecoin / IPFS",
    "Chainlink Oracles",
    "zkSNARKs / FHE",
    "UUPS upgradeable contracts",
    "Multisig & timelock governance",
    "Smart contract auditing",
    "AI agents",
  ],
};

const Row = styled.div`
  display: grid;
  grid-template-columns: 11rem 1fr;
  gap: 1rem 1.5rem;
  padding: 1.1rem 0;
  border-top: 1px solid var(--line);

  &:first-child {
    border-top: none;
    padding-top: 0;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const Cat = styled.div`
  font-family: var(--sans);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
  padding-top: 0.2rem;
`;

const Items = styled.div`
  font-size: 1.02rem;
  line-height: 1.75;
`;

const Skills = () => (
  <Section id="skills">
    <Eyebrow>Skills</Eyebrow>
    {Object.entries(skills).map(([cat, list]) => (
      <Row key={cat}>
        <Cat>{cat}</Cat>
        <Items>{list.join(", ")}</Items>
      </Row>
    ))}
  </Section>
);

export default Skills;
