import Container from "../../components/Container";
import TopBar from "../../components/TopBar";
import SolutionImage from "../../components/SolutionImage";
import React from 'react'
import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import theme from "../../styles/themeConfig";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopBar />
      <Container>
        <Left>
          <h2>Soluções para você e para sua empresa</h2>
          
          <ul> <h2>Suporte Técnico - Office Solution</h2>
            <li>Manutenção de computadores,notebooks, servidores, impressoras, redes.</li>
          </ul>

          <ul> <h2>Suporte Técnico - Home Solutions</h2>
            <li>Manutencão e conserto de aparelhos de arcondicionado, máquinas de lavar, refrigeradores, televisores e sistemas embarcados por voz (Alexa, Google Home)</li>
          </ul>

          <ul> <h2>Soluções em TI</h2>
            <li>Plataforma de Help Desk, Desenvolvimento de sites, aplicativos WEB e Mobile, e soluções on-line. Automatização de processos.</li>
          </ul>
          <p onClick={()=>navigate("/contacts")}>Entre em contato<ArrowForwardIcon color='#fff' fontSize='large'/> </p>

        </Left>
        <Right>
          <SolutionImage />
        </Right>
      </Container>
    
    </>
  );
};

const Left= styled.div`
p{
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  font-family: ${theme.fonts.BASE};
  font-size:${theme.fontSizes.MEDIUM};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
      font-size:${theme.fontSizes.SMALL};
      padding: 10px;
}
}
p:hover,
p:focus,
p:active {
    transform: scale(1.1);
}

  width:60%;
  color: ${theme.colors.LETRA};
  padding-left: 20px;
  h1{
    font-family: ${theme.fonts.BASE};
    font-size:${theme.fontSizes.LARGE};
    font-weight: 800;
    padding: 15px;
    @media (max-width: 600px) {
      font-size: ${theme.fontSizes.MEDIUM};
      padding: 10px;
      text-align: center;
    }
  }
  h2{
    color:  ${theme.colors.LETRA};
    padding: 15px;
    font-family:${theme.fonts.BASE};
    font-size:${theme.fontSizes.MEDIUM};
    display: flex;
    align-items: center;
    gap:2px;
    @media (max-width: 600px) {
      font-size:${theme.fontSizes.SMALL};
      padding: 10px;
    }
  }
  @media (max-width: 600px) {
      width:100%;
      padding: 10px;
      
    }


`
const Right= styled.div`
  padding-right: 20px;
  width:40%;
  display:flex;
  justify-content:center;
  align-items:center;

  @media (max-width: 600px) {
      width:90%;
      padding: 10px;
      
    }
  `

export default Solutions;
