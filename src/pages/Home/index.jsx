import Container from "../../components/Container";
import TopBar from "../../components/TopBar";
import HomeImage from "../../components/HomeImage";
import React from 'react'
import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import theme from "../../styles/themeConfig";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <TopBar />
      <Container>
        <Left>
          {/* <TioTechImage /> */}
          <h1>Tecnologia para tranformar</h1>
          <h2>Fornecemos soluções de ponta a ponta, desde suporte a criação de ferramentas</h2>
          <p onClick={()=>navigate("/solutions")}>Conheça nossas soluções <ArrowForwardIcon color='#fff' fontSize='large'/> </p>
        </Left>
        <Right>
          <HomeImage />
        </Right>
        {/* <a href='https://br.freepik.com/fotos-vetores-gratis/programacao'>Programação foto criado por rawpixel.com - br.freepik.com</a> */}
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
    font-size:${theme.fontSizes.LOGO};
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

export default Home;
