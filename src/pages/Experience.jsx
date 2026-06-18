import React from "react";
import styled from "styled-components";
import { Section, Eyebrow, Meta, TextLink } from "../components/ui";

const roles = [
  {
    title: "Lead Blockchain & Backend Developer",
    org: "Mercle",
    link: "https://mercle.ai/",
    dates: "Jul 2025 — Dec 2025",
    note: "Built GPU-accelerated encryption and Merkle-proof systems and shipped production-grade Solana token and program contracts. Led their deployment, resolving external audit findings for secure release, and built hardware for facial verification.",
  },
  {
    title: "Web3 + Backend Developer",
    org: "ZkAGI",
    dates: "Mar 2024 — Jul 2025",
    note: "DePIN on Solana — zk proofs, FHE, and on-chain program development.",
  },
  {
    title: "Community Advocate",
    org: "Chainlink Labs",
    dates: "Dec 2024 — Present",
    note: "Contracts, bug fixes, and docs improvements on the Chainlink codebase.",
  },
  {
    title: "Open Source Contributor",
    org: "Protocol Labs · Filecoin",
    dates: "Oct 2024 — Present",
    note: "Contributing across 5+ projects in the Filecoin ecosystem.",
  },
  {
    title: "Smart Contract & Backend Intern",
    org: "NKN Labs",
    dates: "Dec 2022 — Feb 2023",
    note: "Built a decentralised betting platform for the ETHforAll 2023 hackathon.",
  },
];

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  padding: 1.15rem 0;
  border-top: 1px solid var(--line);

  &:first-child {
    border-top: none;
    padding-top: 0;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  font-family: var(--serif);
  font-size: 1.12rem;
  font-weight: 500;

  span {
    color: var(--muted);
    font-weight: 400;
  }
`;

const Note = styled.p`
  font-size: 1rem;
  color: var(--muted);
  margin-top: 0.3rem;
`;

const Experience = () => {
  return (
    <Section id="experience">
      <Eyebrow>Past Experience</Eyebrow>
      <List>
        {roles.map((r) => (
          <Item key={r.org + r.title}>
            <Head>
              <Title>
                {r.title}{" "}
                <span>
                  ·{" "}
                  {r.link ? (
                    <TextLink
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {r.org}
                    </TextLink>
                  ) : (
                    r.org
                  )}
                </span>
              </Title>
              <Meta>{r.dates}</Meta>
            </Head>
            <Note>{r.note}</Note>
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default Experience;
