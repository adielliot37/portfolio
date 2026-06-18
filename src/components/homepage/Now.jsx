import React from "react";
import styled from "styled-components";
import { Section, Eyebrow, Meta, Mark } from "../ui";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Role = styled.div``;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  font-family: var(--serif);
  font-size: 1.2rem;
  font-weight: 500;

  span {
    color: var(--muted);
    font-weight: 400;
  }
`;

const Body = styled.p`
  font-size: 1.04rem;
  line-height: 1.7;
`;

const Bullets = styled.ul`
  list-style: none;
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  li {
    font-size: 0.98rem;
    color: var(--muted);
    padding-left: 1.1rem;
    position: relative;
  }

  li::before {
    content: "—";
    position: absolute;
    left: 0;
    color: var(--ink);
  }
`;

const Now = () => {
  return (
    <Section id="now">
      <Eyebrow>Now</Eyebrow>
      <List>
        <Role>
          <Head>
            <Title>
              Lead Blockchain Engineer <span>· NaXum — BlessUP</span>
            </Title>
            <Meta>Feb 2026 — Present</Meta>
          </Head>
          <Body>
            I <Mark>lead the blockchain division</Mark> building the BlessUP
            Network, a Web3 social ecosystem on Base. I own the token and
            contract layer end to end — from tokenomics through audit,
            deployment, and governance — and I led{" "}
            <Mark>company-wide adoption of AI-assisted development</Mark>.
          </Body>
          <Bullets>
            <li>
              Designed and shipped the ACT.X token economy — an upgradeable
              ERC-20 with Merkle-anchored daily reward settlement and on-chain
              commerce fees.
            </li>
            <li>
              Built the Genesis Founder NFT plus a presale and vesting suite,
              governed by a multisig and 48-hour timelock.
            </li>
            <li>
              Own the contract roadmap through audit prep, deployment, and
              multisig governance; authored the protocol whitepaper and
              reward-model amendments.
            </li>
            <li>
              Led the AI-adoption initiative — authored an internal playbook and
              onboarded other teams (frontend, mobile, backend, QA) onto
              AI-assisted workflows.
            </li>
          </Bullets>
        </Role>
      </List>
    </Section>
  );
};

export default Now;
