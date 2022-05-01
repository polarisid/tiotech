import styled from "styled-components";
import theme from "../styles/themeConfig";
const Container = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Container;

const Box = styled.div`
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
  width: 100%;
  height: 100vh;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.AZUL_BASE};
  @media (max-width: 600px) {
      flex-direction: column;
    }

`;
