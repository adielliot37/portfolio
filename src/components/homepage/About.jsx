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
            Self-taught Blockchain/web3 Developer
            <br></br>
            <br></br>
            Primary Techs: Blockchain, Javascript, ReactJs, CSS, Solidity, Smart-contracts, c++, Arduino/RaspberryPi, node, HTML, Ethereum, Layer 2, Database.
          </p>
          <br></br>
          <p>
            I'm searching for a Blockchain/Solidity developer position where I can utilize my skills to optimize  Dapps & Smart-contracts with cool and stable user experience.
            <br></br>
            <br></br>
            My motivators are curiosity, delight, and the desire to achieve something remarkable. 
            <br></br>
            <br></br>
            My goal is to create revolutionized web3 world.
            <br></br>
            <br></br>
            Let's work together to make a lasting impact.
          </p>
        </ContainerSlideIn>
    </AboutDiv>
  )
}

export default About
