import { useEffect, useRef, useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Outlet, useLocation } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Background = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: hsl(0, 0%, 5%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inconsolata", monospace;
  padding: 12px;
  
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const Container = styled.div`
  min-height: calc(100vh - 24px);
  width: calc(100vw - 24px);
  border: 1px solid #333;
  background-color: hsl(0, 0%, 5%);
  position: relative;
  animation: ${fadeIn} 0.8s ease-out forwards;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: calc(100vh - 40px);
    width: calc(100vw - 40px);
    border-color: #444;
  }
`;

const Header = styled.header`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid #222;
  position: relative;
  z-index: 100;
  background: hsl(0, 0%, 5%);

  @media (min-width: 768px) {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 15rem;
    height: calc(100vh - 40px);
    border-bottom: none;
    border-right: 1px solid #222;
    padding: 2rem 1.5rem;
    gap: 0;
  }

  @media (min-width: 1200px) {
    width: 17rem;
    padding: 2.5rem 2rem;
  }
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const H1 = styled.h1`
  font-weight: 200;
  font-size: 1.75rem;
  color: #fff;
  letter-spacing: 0.02em;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.25rem;
  }
`;

const TypedText = styled.pre`
  font-family: inherit;
  font-size: 0.85rem;
  color: #00ffc8;
  margin: 0;
  height: 1.4em;
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const MobileMenuToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 101;
  
  &:hover {
    background: rgba(0, 255, 200, 0.1);
    border-color: #00ffc8;
  }
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  width: 18px;
  height: 14px;
  position: relative;
  
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: currentColor;
    border-radius: 2px;
    transition: all 0.25s ease;
    
    &:nth-child(1) {
      top: ${props => props.$isOpen ? '6px' : '0'};
      transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      top: 6px;
      opacity: ${props => props.$isOpen ? 0 : 1};
    }
    
    &:nth-child(3) {
      top: ${props => props.$isOpen ? '6px' : '12px'};
      transform: ${props => props.$isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Nav = styled.nav`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  padding: 1rem 0;
  background: hsl(0, 0%, 5%);
  
  @media (min-width: 768px) {
    display: flex;
    padding: 2rem 0;
    margin-top: 1rem;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  margin: 0 -1rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: ${props => props.$isActive ? '#00ffc8' : '#c3c3c3'};
  background: ${props => props.$isActive ? 'rgba(0, 255, 200, 0.08)' : 'transparent'};
  border-left: 3px solid ${props => props.$isActive ? '#00ffc8' : 'transparent'};
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
    border-left-color: #00ffc8;
  }

  @media (min-width: 768px) {
    margin: 0 -1.5rem;
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }

  @media (min-width: 1200px) {
    margin: 0 -2rem;
    padding: 0.6rem 2rem;
  }
`;

const NavIcon = styled.span`
  font-size: 1rem;
  width: 1.25rem;
  text-align: center;
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid #222;
  font-size: 0.75rem;
  color: #666;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00ffc8;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0, 255, 200, 0.4); }
    50% { opacity: 0.8; box-shadow: 0 0 0 4px rgba(0, 255, 200, 0); }
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const MainContent = styled.main`
  flex: 1;
  position: relative;
  overflow: hidden;
  min-height: 50vh;

  @media (min-width: 768px) {
    margin-left: 15rem;
    min-height: auto;
  }

  @media (min-width: 1200px) {
    margin-left: 17rem;
  }
`;

const Watermark = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 0.7rem;
  color: #666;
  letter-spacing: 0.05em;
  z-index: 50;
  transition: all 0.2s ease;
  
  &:hover {
    color: #00ffc8;
  }

  @media (max-width: 767px) {
    bottom: 16px;
    right: 16px;
    font-size: 0.65rem;
  }
`;

const Home = () => {
  const webD = useRef(null);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("loading...");

  // Fetch last commit date from GitHub
  useEffect(() => {
    const fetchLastCommit = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/adielliot37/portfolio/commits/main"
        );
        if (response.ok) {
          const data = await response.json();
          const commitDate = new Date(data.commit.committer.date);
          const formatted = commitDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }).toLowerCase();
          setLastUpdated(formatted);
        } else {
          setLastUpdated("dec 2024");
        }
      } catch (error) {
        setLastUpdated("dec 2024");
      }
    };
    fetchLastCommit();
  }, []);

  useEffect(() => {
    const typedWeb = new Typed(webD.current, {
      strings: ["blockchain developer", "web3 builder", "open source contributor", "quant trader", "hardware hacker", "defi degen", "zk enthusiast"],
      startDelay: 500,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typedWeb.destroy();
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home", icon: "◈" },
    { path: "/projects", label: "Projects", icon: "◇" },
    { path: "/experience", label: "Experience", icon: "◆" },
    { path: "/skills", label: "Skills", icon: "◊" },
    { path: "/writings", label: "Writings", icon: "✎" },
    { path: "/contact", label: "Contact", icon: "○" },
    { path: "/ink", label: "Cicada 3301", icon: "⬡" },
  ];

  return (
    <Background>
      <Container>
        <Header>
          <NameSection>
            <H1>Aditya Chaplot</H1>
            <TypedText ref={webD}></TypedText>
          </NameSection>

          <MobileMenuToggle 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon $isOpen={menuOpen}>
              <span></span>
              <span></span>
              <span></span>
            </MenuIcon>
          </MobileMenuToggle>

          <Nav $isOpen={menuOpen}>
            <NavList>
              {navItems.map((item) => (
                <NavItem key={item.path}>
                  <NavLink 
                    to={item.path} 
                    $isActive={location.pathname === item.path}
                  >
                    <NavIcon>{item.icon}</NavIcon>
                    {item.label}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </Nav>

          <StatusIndicator>
            Available for opportunities
          </StatusIndicator>
        </Header>

        <MainContent>
          <Outlet />
        </MainContent>

        <Watermark>
          last updated: {lastUpdated}
        </Watermark>
      </Container>
    </Background>
  );
};

export default Home;
