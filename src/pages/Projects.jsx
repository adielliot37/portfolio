import React from "react";
import styled from "styled-components";
import { Section, Eyebrow, Meta, TextLink } from "../components/ui";
import { projects } from "../components/data/data";

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.article`
  padding: 1.35rem 0;
  border-top: 1px solid var(--line);

  &:first-child {
    border-top: none;
    padding-top: 0;
  }
`;

const Name = styled.h3`
  font-family: var(--serif);
  font-size: 1.18rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const Desc = styled.p`
  font-size: 1.02rem;
  color: var(--ink);
  margin-bottom: 0.6rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  font-family: var(--sans);
  font-size: 0.8rem;
  font-weight: 500;
`;

const Projects = () => (
  <Section id="work">
    <Eyebrow>Selected Work</Eyebrow>
    <List>
      {projects.map((p, i) => (
        <Item key={p.name + i}>
          <Name>{p.name}</Name>
          <Desc>{p.projects}</Desc>
          <Footer>
            <Meta>{p.year}</Meta>
            <Links>
              {p.url && (
                <TextLink href={p.url} target="_blank" rel="noopener noreferrer">
                  Code ↗
                </TextLink>
              )}
              {p.web && (
                <TextLink href={p.web} target="_blank" rel="noopener noreferrer">
                  Live ↗
                </TextLink>
              )}
            </Links>
          </Footer>
        </Item>
      ))}
    </List>
  </Section>
);

export default Projects;
