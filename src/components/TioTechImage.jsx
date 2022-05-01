import React from 'react'
import tiotech from "../assets/tiotech.png";
import styled from "styled-components";

const TioTechImage = () => {
    return (
        <Box>
        <img src={tiotech}/>
        </Box>
    );
    }
export default TioTechImage;

const Box = styled.div`
box-sizing: border-box; 
width:15%;
display: flex;
justify-content: center;
align-items: center;
    img{
        width: 100%;
    }
`