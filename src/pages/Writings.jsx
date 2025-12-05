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

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ArticleCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid #222;
  border-radius: 16px;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    border-color: #00ffc8;
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 255, 200, 0.1);
  }
`;

const ArticleIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 200, 0.1);
  border-radius: 12px;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ArticleTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
  
  @media (min-width: 768px) {
    font-size: 1.15rem;
  }
`;

const ArticleDescription = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin: 0;
  line-height: 1.7;
  flex: 1;
`;

const ArticleMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid #222;
  font-size: 0.8rem;
  color: #555;
`;

const Tag = styled.span`
  padding: 0.25rem 0.6rem;
  background: rgba(0, 255, 200, 0.08);
  border: 1px solid rgba(0, 255, 200, 0.2);
  border-radius: 20px;
  color: #00ffc8;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ReadMore = styled.span`
  margin-left: auto;
  color: #00ffc8;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &::after {
    content: '→';
    transition: transform 0.2s ease;
  }
  
  ${ArticleCard}:hover &::after {
    transform: translateX(4px);
  }
`;

const articles = [
  {
    icon: "🔐",
    title: "SOL-Route: A Fully Encrypted, Pay-to-Unlock File Marketplace Built on Solana + Storacha MCP",
    description: "A decentralized encrypted digital marketplace designed to minimize trust between buyers, sellers, and servers. Built with AES-256-GCM encryption, AWS KMS key wrapping, X25519 ephemeral key exchange, and Solana memo-validated payments.",
    url: "https://medium.com/@aditya311001rj/sol-route-a-fully-encrypted-pay-to-unlock-file-marketplace-built-on-solana-storacha-mcp-11c9cfc7f287",
    tags: ["Solana", "Encryption", "DeFi"],
    readTime: "4 min read",
    date: "Nov 26, 2025"
  },
  {
    icon: "🛡️",
    title: "Storacha VES: Verifiable Encrypted Storage Made Simple",
    description: "A client + server system combining Signal-like end-to-end encryption, Git's Merkle trees for tamper-proof file integrity, and IPFS-style decentralized storage. Encrypts files in-browser using AES-256-GCM.",
    url: "https://medium.com/@akashjana663/storacha-ves-verifiable-encrypted-storage-made-simple-7f165f792ae6",
    tags: ["Storage", "Encryption", "IPFS"],
    readTime: "5 min read",
    date: "2025"
  }
];

const ComingSoon = styled.div`
  text-align: center;
  padding: 2rem;
  margin-top: 1rem;
  background: rgba(20, 20, 20, 0.4);
  border: 1px dashed #333;
  border-radius: 12px;
  color: #555;
  font-size: 0.9rem;
`;

const Writings = () => {
  return (
    <Container
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <Header>
        <Title>Writings</Title>
        <Subtitle>Technical articles & publications</Subtitle>
      </Header>

      <ArticlesGrid>
        {articles.map((article, index) => (
          <ArticleCard
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn("up", "tween", index * 0.15, 0.5)}
          >
            <ArticleIcon>{article.icon}</ArticleIcon>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleDescription>{article.description}</ArticleDescription>
            <ArticleMeta>
              {article.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              <ReadMore>Read</ReadMore>
            </ArticleMeta>
          </ArticleCard>
        ))}
      </ArticlesGrid>

      <ComingSoon>
        ✍️ More articles coming soon...
      </ComingSoon>
    </Container>
  );
};

export default Writings;

