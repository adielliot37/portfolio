import styled from "styled-components";

// Shared editorial primitives. Pure monochrome, no motion.

export const Section = styled.section`
  padding: 3.25rem 0;
  border-top: 1px solid var(--line);

  &:first-of-type {
    border-top: none;
  }
`;

// Small uppercase sans label that sits above each section
export const Eyebrow = styled.p`
  font-family: var(--sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: var(--serif);
  font-size: 1.55rem;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 1.25rem;
`;

export const Prose = styled.div`
  font-size: 1.06rem;
  line-height: 1.7;
  color: var(--ink);

  p + p {
    margin-top: 1rem;
  }
`;

// Negative-colour highlight: inverted block used to emphasise specific words.
export const Mark = styled.span`
  background: var(--invert-bg);
  color: var(--invert-fg);
  padding: 0.02em 0.34em;
  border-radius: 1px;
  white-space: nowrap;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;

// Monospace-free meta line (years, locations, tags) in small sans
export const Meta = styled.span`
  font-family: var(--sans);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--muted);
`;

// Underlined inline text link
export const TextLink = styled.a`
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 1px;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.55;
  }
`;
