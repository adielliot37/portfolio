import React from "react";
import { Section, Eyebrow, Prose, Mark } from "../ui";

const About = () => {
  return (
    <Section id="about">
      <Eyebrow>About</Eyebrow>
      <Prose>
        <p>
          I have been taking apart electronics and writing questionable C++ on
          Arduino boards since I was a kid, long before I knew what real
          programming was. Trading came in high school, where I blew up a few
          accounts and learned fast. Then I read the Bitcoin whitepaper and it
          clicked: peer-to-peer systems, real decentralisation,{" "}
          <Mark>cryptographic truth</Mark>. That idea has not left my head since.
        </p>
        <p>
          I have built in Web3 ever since, from DeFi bots that rotate portfolios
          across exchanges to smart contracts that handle the edge cases most
          people never think about. I care about systems that are correct under
          pressure, not just demos that look good on a slide.
        </p>
        <p>
          I do not just want to ship apps. I want to build things that live
          on-chain, hold up over time, and make people realise something was not
          possible before.
        </p>
      </Prose>
    </Section>
  );
};

export default About;
