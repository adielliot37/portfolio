import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Keyframe animations
const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const scanline = keyframes`
  0% { top: -10%; }
  100% { top: 110%; }
`;

const flicker = keyframes`
  0%, 100% { opacity: 1; }
  41.99% { opacity: 1; }
  42% { opacity: 0; }
  43% { opacity: 1; }
  43.99% { opacity: 1; }
  44% { opacity: 0.5; }
  44.99% { opacity: 0.5; }
  45% { opacity: 1; }
`;

const revealText = keyframes`
  0% { 
    clip-path: inset(0 100% 0 0);
    opacity: 0;
  }
  100% { 
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.95); }
`;

const pulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(247, 147, 26, 0.3), 0 0 40px rgba(247, 147, 26, 0.1);
  }
  50% { 
    box-shadow: 0 0 40px rgba(247, 147, 26, 0.5), 0 0 80px rgba(247, 147, 26, 0.2);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(1deg); }
  75% { transform: translateY(5px) rotate(-1deg); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const lineExpand = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

const blink = keyframes`
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
`;

const hashScroll = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #050505;
  position: relative;
  overflow: hidden;
  animation: ${props => props.$fadeOut ? css`${fadeOut} 0.6s ease-out forwards` : 'none'};
`;

const GridBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(247, 147, 26, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(247, 147, 26, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: ${float} 20s ease-in-out infinite;
`;

const HashBackground = styled.div`
  position: absolute;
  left: 5%;
  top: 0;
  height: 200%;
  font-family: "Inconsolata", monospace;
  font-size: 0.6rem;
  color: rgba(247, 147, 26, 0.08);
  writing-mode: vertical-rl;
  animation: ${hashScroll} 20s linear infinite;
  pointer-events: none;
  user-select: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const HashBackground2 = styled(HashBackground)`
  left: auto;
  right: 5%;
  animation-duration: 25s;
  animation-direction: reverse;
`;

const Scanline = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(247, 147, 26, 0.1),
    transparent
  );
  animation: ${scanline} 3s linear infinite;
  pointer-events: none;
  z-index: 10;
`;

const Corner = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(247, 147, 26, 0.3);
  
  &.top-left {
    top: 30px;
    left: 30px;
    border-right: none;
    border-bottom: none;
  }
  
  &.top-right {
    top: 30px;
    right: 30px;
    border-left: none;
    border-bottom: none;
  }
  
  &.bottom-left {
    bottom: 30px;
    left: 30px;
    border-right: none;
    border-top: none;
  }
  
  &.bottom-right {
    bottom: 30px;
    right: 30px;
    border-left: none;
    border-top: none;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    
    &.top-left, &.top-right { top: 15px; }
    &.bottom-left, &.bottom-right { bottom: 15px; }
    &.top-left, &.bottom-left { left: 15px; }
    &.top-right, &.bottom-right { right: 15px; }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
`;

const LogoWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const BitcoinRing = styled.div`
  width: 90px;
  height: 90px;
  border: 2px solid rgba(247, 147, 26, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${pulse} 2s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    border: 1px dashed rgba(247, 147, 26, 0.2);
    border-radius: 50%;
    animation: ${rotate} 20s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 8px;
    border: 1px solid rgba(247, 147, 26, 0.15);
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;

const BitcoinSymbol = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #f7931a;
  font-family: "Inconsolata", monospace;
  animation: ${flicker} 4s linear infinite, ${float} 3s ease-in-out infinite;
  text-shadow: 0 0 20px rgba(247, 147, 26, 0.5);

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const GlitchText = styled.h1`
  font-size: 2rem;
  font-family: "Inconsolata", monospace;
  font-weight: 200;
  letter-spacing: 0.1em;
  position: relative;
  color: #fff;
  animation: ${revealText} 0.8s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  &::before {
    color: #f7931a;
    animation: ${glitch} 0.3s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
    transform: translate(-2px);
    opacity: 0.8;
  }
  
  &::after {
    color: #00d4ff;
    animation: ${glitch} 0.3s infinite reverse;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    transform: translate(2px);
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const WelcomeTag = styled.p`
  font-size: 0.8rem;
  font-family: "Inconsolata", monospace;
  color: #555;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  animation: ${revealText} 0.5s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.85rem;
  font-family: "Inconsolata", monospace;
  color: #f7931a;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-top: 0.75rem;
  animation: ${revealText} 0.6s ease-out forwards;
  animation-delay: 0.8s;
  opacity: 0;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const LoaderWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LoaderLine = styled.div`
  width: 200px;
  height: 2px;
  background: #1a1a1a;
  position: relative;
  overflow: hidden;
  border-radius: 2px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #f7931a, #ffc107);
    transform-origin: left;
    animation: ${lineExpand} 2s ease-out forwards;
  }

  @media (min-width: 768px) {
    width: 280px;
  }
`;

const BlockInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const BlockItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const BlockLabel = styled.span`
  font-size: 0.6rem;
  font-family: "Inconsolata", monospace;
  color: #444;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const BlockValue = styled.span`
  font-size: 0.75rem;
  font-family: "Inconsolata", monospace;
  color: ${props => props.$highlight ? '#00ffc8' : '#f7931a'};
  font-weight: 600;
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${revealText} 0.5s ease-out forwards;
  animation-delay: 1.2s;
  opacity: 0;
`;

const StatusDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.$live ? '#00ffc8' : '#f7931a'};
  animation: ${blink} 1s ease-in-out infinite;
`;

const StatusText = styled.div`
  font-size: 0.7rem;
  font-family: "Inconsolata", monospace;
  color: #555;
  letter-spacing: 0.1em;
  
  span {
    color: #f7931a;
  }
  
  span.live {
    color: #00ffc8;
  }
`;

const TerminalLine = styled.div`
  font-size: 0.65rem;
  font-family: "Inconsolata", monospace;
  color: #333;
  margin-top: 1.5rem;
  overflow: hidden;
  white-space: nowrap;
  animation: ${revealText} 0.8s ease-out forwards;
  animation-delay: 1.5s;
  opacity: 0;
  
  span.prompt {
    color: #f7931a;
  }
  
  span.cmd {
    color: #00ffc8;
  }
`;

const Splash = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [blockHeight, setBlockHeight] = useState("...");
  const [btcPrice, setBtcPrice] = useState("...");
  const [hashRate, setHashRate] = useState("...");

  useEffect(() => {
    // Fetch live Bitcoin data
    const fetchBitcoinData = async () => {
      try {
        // Fetch block height from mempool.space
        const blockRes = await fetch("https://mempool.space/api/blocks/tip/height");
        if (blockRes.ok) {
          const height = await blockRes.text();
          setBlockHeight(parseInt(height).toLocaleString());
        }
        
        // Fetch BTC price from CoinGecko
        const priceRes = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        if (priceRes.ok) {
          const priceData = await priceRes.json();
          setBtcPrice("$" + priceData.bitcoin.usd.toLocaleString());
        }

        // Fetch hashrate from mempool.space
        const hashrateRes = await fetch("https://mempool.space/api/v1/mining/hashrate/3d");
        if (hashrateRes.ok) {
          const hashrateData = await hashrateRes.json();
          const currentHashrate = hashrateData.currentHashrate / 1e18; // Convert to EH/s
          setHashRate(currentHashrate.toFixed(1) + " EH/s");
        }
      } catch (error) {
        console.log("Using fallback data");
      }
    };

    fetchBitcoinData();

    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  const hashString = "0x7f8a9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6";

  return (
    <Container $fadeOut={fadeOut}>
      <GridBackground />
      <HashBackground>{hashString.repeat(20)}</HashBackground>
      <HashBackground2>{hashString.repeat(20)}</HashBackground2>
      <Scanline />
      
      <Corner className="top-left" />
      <Corner className="top-right" />
      <Corner className="bottom-left" />
      <Corner className="bottom-right" />
      
      <ContentWrapper>
        <LogoWrapper>
          <BitcoinRing>
            <BitcoinSymbol>₿</BitcoinSymbol>
          </BitcoinRing>
        </LogoWrapper>
        
        <TextWrapper>
          <WelcomeTag>gm, you've reached</WelcomeTag>
          <GlitchText data-text="ELLIOT37">ELLIOT37</GlitchText>
          <Subtitle>on-chain builder · web3 dev</Subtitle>
        </TextWrapper>
        
        <LoaderWrapper>
          <LoaderLine />
          
          <BlockInfo>
            <BlockItem>
              <BlockLabel>Block Height</BlockLabel>
              <BlockValue>{blockHeight}</BlockValue>
            </BlockItem>
            <BlockItem>
              <BlockLabel>BTC/USD</BlockLabel>
              <BlockValue $highlight>{btcPrice}</BlockValue>
            </BlockItem>
            <BlockItem>
              <BlockLabel>Hashrate</BlockLabel>
              <BlockValue>{hashRate}</BlockValue>
            </BlockItem>
          </BlockInfo>
          
          <StatusWrapper>
            <StatusDot $live />
            <StatusText><span className="live">live</span> from <span>bitcoin mainnet</span></StatusText>
          </StatusWrapper>
          
          <TerminalLine>
            <span className="prompt">~elliot37$</span> <span className="cmd">loading</span> portfolio.exe
          </TerminalLine>
        </LoaderWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Splash;
