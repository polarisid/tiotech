import styled from "styled-components";
import TioTechImage from "./TioTechImage";
import theme from "../styles/themeConfig";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  return (
  <Box>
    <Logo onClick={()=>navigate("/")}>
      <TioTechImage />
      TioTech
    </Logo>
    <div class="right">
        <p onClick={()=>navigate("/")} >Home</p>
        <p onClick={()=>navigate("/solutions")}>Soluções</p>
        {/* <p>Sobre</p> */}
        <p onClick={()=>navigate("/contacts")}>Contato</p>
    </div>
  </Box>
  )
};

export default TopBar;

const Logo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size:  ${theme.fontSizes.LOGO};
  font-family: ${theme.fonts.LOGO};
  color: ${theme.colors.LETRA};
  letter-spacing:1.5px;
  @media (max-width: 600px) {
      font-size: ${theme.fontSizes.SMALL};
    }

`
const Box = styled.div`
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
}
p:hover,
p:focus,
p:active {
    transform: scale(1.1);
}
box-sizing: border-box; 
    .right{
        display: flex;
        gap: 20px;
        @media (max-width: 600px) {
        gap : 10px;
        }
    }
    padding: 0px 20px;
    color: ${theme.colors.LETRA};
    font-size: ${theme.fontSizes.SMALL};
    font-family: ${theme.fonts.SECOND};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
      font-size: ${theme.fontSizes.XSMALL};
      height: 50px;
      padding: 0px 10px;
      
    }
`

;