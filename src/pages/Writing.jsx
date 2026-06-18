import React from "react";
import styled from "styled-components";
import { Section, Eyebrow, Meta, TextLink } from "../components/ui";

const articles = [
  {
    title:
      "SOL-Route: A Fully Encrypted, Pay-to-Unlock File Marketplace on Solana + Storacha MCP",
    description:
      "A decentralised encrypted marketplace built to minimise trust between buyers, sellers, and servers — AES-256-GCM encryption, AWS KMS key wrapping, X25519 key exchange, and Solana memo-validated payments.",
    url: "https://medium.com/@aditya311001rj/sol-route-a-fully-encrypted-pay-to-unlock-file-marketplace-built-on-solana-storacha-mcp-11c9cfc7f287",
    date: "Nov 2025",
  },
  {
    title: "Storacha VES: Verifiable Encrypted Storage Made Simple",
    description:
      "A client + server system combining Signal-like end-to-end encryption, Git-style Merkle trees for tamper-proof integrity, and IPFS decentralised storage — files encrypted in-browser with AES-256-GCM.",
    url: "https://medium.com/@akashjana663/storacha-ves-verifiable-encrypted-storage-made-simple-7f165f792ae6",
    date: "2025",
  },
];

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.article`
  padding: 1.35rem 0;
  border-top: 1px solid var(--line);

  &:first-child {
    border-top: none;
    padding-top: 0;
  }
`;

const Title = styled.h3`
  font-family: var(--serif);
  font-size: 1.15rem;
  font-weight: 500;
  line-height: 1.35;
  margin-bottom: 0.4rem;

  a:hover {
    opacity: 0.55;
  }
`;

const Desc = styled.p`
  font-size: 1.02rem;
  color: var(--ink);
  margin-bottom: 0.6rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Writing = () => (
  <Section id="writing">
    <Eyebrow>Writing</Eyebrow>
    <List>
      {articles.map((a) => (
        <Item key={a.title}>
          <Title>
            <a href={a.url} target="_blank" rel="noopener noreferrer">
              {a.title}
            </a>
          </Title>
          <Desc>{a.description}</Desc>
          <Footer>
            <Meta>{a.date}</Meta>
            <span style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", fontWeight: 500 }}>
              <TextLink href={a.url} target="_blank" rel="noopener noreferrer">
                Read ↗
              </TextLink>
            </span>
          </Footer>
        </Item>
      ))}
    </List>
  </Section>
);

export default Writing;
