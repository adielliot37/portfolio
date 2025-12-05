import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
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
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

const Label = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #00ffc8;
  background: rgba(0, 255, 200, 0.1);
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 200;
  color: #fff;
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #00ffc8, #00d4ff, #00ffc8);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #888;
  margin-top: 1.5rem;
  line-height: 1.7;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 2rem;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid #222;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #00ffc8;
    background: rgba(0, 255, 200, 0.05);
    transform: translateY(-2px);
  }
`;

const ContactIcon = styled.span`
  font-size: 1.25rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 200, 0.1);
  border-radius: 8px;
`;

const ContactInfo = styled.div`
  text-align: left;
`;

const ContactLabel = styled.div`
  font-size: 0.7rem;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.15rem;
`;

const ContactValue = styled.div`
  font-size: 0.85rem;
  color: #ccc;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  width: 100%;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, #333, transparent);
  }
`;

const DividerText = styled.span`
  font-size: 0.75rem;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const SocialsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid #222;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #00ffc8;
    background: rgba(0, 255, 200, 0.08);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 255, 200, 0.15);
  }
  
  img {
    width: 22px;
    height: 22px;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  
  &:hover img {
    opacity: 1;
  }
`;

const TelegramIcon = styled.div`
  font-size: 1.3rem;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.85rem 1.75rem;
  background: linear-gradient(135deg, #00ffc8, #00d4ff);
  color: #000;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 255, 200, 0.3);
  }
  
  span {
    font-size: 1.1rem;
  }
`;

const AvailabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.6rem 1rem;
  background: rgba(0, 255, 200, 0.05);
  border: 1px solid rgba(0, 255, 200, 0.2);
  border-radius: 30px;
  font-size: 0.8rem;
  color: #00ffc8;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00ffc8;
    animation: ${pulse} 2s infinite;
  }
`;

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/adielliot37",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aditya-chaplot-3a5b6b239/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://x.com/adimrelliot",
    icon: Twitter,
  },
];

const Contact = () => {
  return (
    <Container
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <ContentWrapper variants={fadeIn("up", "tween", 0.2, 0.5)}>
        <Label>Get In Touch</Label>
        
        <Title>Let's Build <GradientText>Something Wild</GradientText></Title>
        
        <Description>
          Have a project in mind? Looking for a blockchain developer? 
          Or just want to chat about Web3, trading, or hardware hacking? 
          I'm always open to new opportunities.
        </Description>

        <ContactGrid>
          <ContactCard href="mailto:aditya311001rj@gmail.com">
            <ContactIcon>📧</ContactIcon>
            <ContactInfo>
              <ContactLabel>Email</ContactLabel>
              <ContactValue>aditya311001rj@gmail.com</ContactValue>
            </ContactInfo>
          </ContactCard>
          <ContactCard href="https://t.me/adielliot1" target="_blank" rel="noopener noreferrer">
            <ContactIcon>✈️</ContactIcon>
            <ContactInfo>
              <ContactLabel>Telegram</ContactLabel>
              <ContactValue>@adielliot1</ContactValue>
            </ContactInfo>
          </ContactCard>
        </ContactGrid>

        <DownloadButton href="/aditya_resume.pdf" download="Aditya_Chaplot_Resume.pdf">
          <span>📄</span> Download Resume
        </DownloadButton>
        
        <Divider>
          <DividerText>Socials</DividerText>
        </Divider>
        
        <SocialsGrid>
          {socials.map((social, index) => (
            <SocialLink
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              variants={fadeIn("up", "tween", 0.4 + index * 0.1, 0.4)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={social.icon} alt={social.name} />
            </SocialLink>
          ))}
          <SocialLink
            href="https://t.me/adielliot1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            variants={fadeIn("up", "tween", 0.7, 0.4)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TelegramIcon>✈️</TelegramIcon>
          </SocialLink>
        </SocialsGrid>
        
        <AvailabilityBadge>
          Available for opportunities
        </AvailabilityBadge>
      </ContentWrapper>
    </Container>
  );
};

export default Contact;
