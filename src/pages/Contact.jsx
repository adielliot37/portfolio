import React from "react";
import styled from "styled-components";
import { Section, Eyebrow, TextLink } from "../components/ui";

const Lead = styled.p`
  font-family: var(--serif);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 1.5rem;

  a {
    border-bottom: 1px solid var(--ink);
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1.5rem;
  font-family: var(--sans);
  font-size: 0.85rem;
  font-weight: 500;
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Eyebrow>Contact</Eyebrow>
      <Lead>
        Building something on-chain, or want to talk shop? Reach me at{" "}
        <TextLink href="mailto:aditya311001rj@gmail.com">
          aditya311001rj@gmail.com
        </TextLink>
        .
      </Lead>
      <Socials>
        <TextLink
          href="https://github.com/adielliot37"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </TextLink>
        <TextLink
          href="https://www.linkedin.com/in/aditya-chaplot-3a5b6b239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </TextLink>
        <TextLink
          href="https://x.com/adimrelliot"
          target="_blank"
          rel="noopener noreferrer"
        >
          X / Twitter ↗
        </TextLink>
      </Socials>
    </Section>
  );
};

export default Contact;
