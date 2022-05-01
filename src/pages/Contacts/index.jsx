import Container from "../../components/Container";
import TopBar from "../../components/TopBar";
import ContactImage from "../../components/ContactImage";
import React from 'react'
import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import theme from "../../styles/themeConfig";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <TopBar />
      <Container>
        <Left>
            <h2>Entre já em contato, será um prazer lhe atender</h2>
            <h2>Email : tiotechsuporte@gmail.com</h2>
            <h2>Telefone : (98) 98493-9991 </h2>
          
        </Left>
        <Right>
          <ContactImage />
        </Right>
      </Container>
    
    </>
  );
};

const Left= styled.div`
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

export default Contacts;
