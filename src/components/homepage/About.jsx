import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../data/motion';
import { ContainerSlideIn } from '../../pages/Projects';

const AboutDiv = styled(motion.div)`
  width: 20rem;
  height: auto;
  color: #c3c3c3;
  position: absolute;
  padding: 1.6rem;
  bottom: 0;
  right: 0;  
  font-family: "Inconsolata", monospace;
  overflow: hidden;
`;

const About = () => {
  return (
    <AboutDiv
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    >
      <ContainerSlideIn
      variants={fadeIn("left", "tween", 1.4, 1)}
      >
        <p>
  Been messing with electronics and writing weird C++ code on Arduino since I was a kid — before I even knew what “real programming” was.
  <br /><br />
  Discovered trading in high school, blew up a few accounts, learned fast. Then came across the Bitcoin whitepaper and everything clicked — peer-to-peer systems, real decentralization, cryptographic truth. That idea hasn’t left my head since.
  <br /><br />
  I've been building in Web3 ever since — from DeFi bots that auto-rotate portfolios across CEXs to smart contracts that handle edge-case logic most people don’t even think about.
  <br /><br />
  I don’t just want to build apps. I want to build things that live on-chain, evolve with time, and make people realize, "oh wow, this wasn’t possible before."
  <br /><br />
  Let’s make something wild.
</p>
        </ContainerSlideIn>
    </AboutDiv>
  )
}

export default About
