import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(0, 255, 200, 0.2), 0 0 40px rgba(0, 255, 200, 0.1);
  }
  50% { 
    box-shadow: 0 0 30px rgba(0, 255, 200, 0.3), 0 0 60px rgba(0, 255, 200, 0.15);
  }
`;

const Container = styled(motion.div)`
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  font-family: "Inconsolata", monospace;
  color: #e0e0e0;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  text-align: center;
`;

const Label = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #00ffc8;
  background: rgba(0, 255, 200, 0.1);
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 2rem;
`;

const Frame = styled(motion.div)`
  width: 200px;
  height: 150px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  animation: ${float} 6s ease-in-out infinite, ${glow} 3s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid rgba(0, 255, 200, 0.3);
    border-radius: 8px;
    pointer-events: none;
    z-index: 1;
  }
  
  @media (min-width: 768px) {
    width: 280px;
    height: 200px;
  }
`;

const TattooImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(30%);
  transition: filter 0.3s ease;
  
  ${Frame}:hover & {
    filter: grayscale(0%);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 200;
  color: #fff;
  margin: 2rem 0 0.5rem 0;
  
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1rem;
  color: #00ffc8;
  font-weight: 400;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.8;
  color: #888;
  margin-top: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 0.95rem;
  }
`;

const CrypticText = styled.p`
  font-size: 0.75rem;
  color: #444;
  margin-top: 2rem;
  letter-spacing: 0.3em;
  font-family: monospace;
`;

const InkPage = () => (
  <Container
    variants={staggerContainer}
    initial="hidden"
    animate="show"
  >
    <ContentWrapper variants={fadeIn("up", "tween", 0.2, 0.6)}>
      <Label>Personal Story</Label>
      
      <Frame
        variants={fadeIn("up", "tween", 0.3, 0.5)}
        whileHover={{ scale: 1.02 }}
      >
        <TattooImg src="/tattoo.jpg" alt="Cicada 3301 Tattoo" />
      </Frame>
      
      <Title>
        Cicada <Subtitle>3301</Subtitle>
      </Title>
      
      <Description>
        The internet's most mysterious puzzle. A cryptographic rabbit hole that 
        consumed my nights and rewired how I think about problems. When something 
        challenges you that deeply, you carry it with you — literally, on my left arm.
      </Description>
      
      <CrypticText>
        ∴ PARABLE ∴ WISDOM ∴ PRIMALITY ∴
      </CrypticText>
    </ContentWrapper>
  </Container>
);

export default InkPage;
