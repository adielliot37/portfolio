import React from "react";
import styled from "styled-components";

const Info = styled.div`
  width: 12rem;
  color: #c3c3c3;
  margin: 1.6rem;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
`;

const Experience = () => {
  return (
    <Info>
      <h3>Smart-contract & Backend Developer Intern at NKN Labs</h3>
      <p>◉ Created a decentralized betting platform for ETHforAll 2023 hackathon</p>
      <h4>Dec 2022 - Feb 2023</h4>
      <div>- - - - - - - - - </div>
      <h3>Web3 + Backend Developer at ZkAGI</h3>
      <p>◉ Working on a DePIN-based project on Solana, focusing on zkProofs, FHE, and Solana contracts</p>
      <h4>Mar 2024 - Present</h4>
    </Info>
  );
};

export default Experience;
