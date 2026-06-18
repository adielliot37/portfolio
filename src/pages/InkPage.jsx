import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Meta } from "../components/ui";

const Wrap = styled.main`
  max-width: var(--measure);
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const Back = styled(Link)`
  font-family: var(--sans);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--muted);
  border-bottom: 1px solid var(--line);
  padding-bottom: 1px;

  &:hover {
    color: var(--ink);
  }
`;

const Figure = styled.figure`
  margin-top: 2.5rem;
`;

const Img = styled.img`
  width: 100%;
  max-width: 320px;
  display: block;
  filter: grayscale(1) contrast(1.05);
`;

const Caption = styled.figcaption`
  margin-top: 1.25rem;
  font-family: var(--serif);
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 32rem;
`;

const InkPage = () => (
  <Wrap>
    <Back to="/">← Back</Back>
    <Figure>
      <Img src="/tattoo.jpg" alt="Cicada 3301 tattoo" />
      <Caption>
        This is Cicada 3301 — the puzzle that kept me up at night chasing
        cryptography, steganography, and dead drops across the internet. I had
        to ink it.
      </Caption>
      <Meta style={{ display: "block", marginTop: "0.75rem" }}>
        3301
      </Meta>
    </Figure>
  </Wrap>
);

export default InkPage;
