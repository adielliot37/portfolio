import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
  overflow: hidden;
`;

const Frame = styled.div`
  width: 220px;
  height: 160px;
  clip-path: polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%);
  border: 2px solid #ccc;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  background: transparent;
`;

const TattooImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Caption = styled.p`
  margin-top: 1rem;
  font-family: "Inconsolata", monospace;
  color: #c3c3c3;
  text-align: center;
  font-size: 0.95rem;
  max-width: 260px;
`;

const InkPage = () => (
  <Wrapper>
    <Frame>
      <TattooImg src="/tattoo.jpg" alt="Cicada 3301 Tattoo" />
    </Frame>
    <Caption>
      Wondering what this symbol is? It’s Cicada 3301—the mind-bending puzzle that kept me up nights. I had to ink it.
    </Caption>
  </Wrapper>
);

export default InkPage;
