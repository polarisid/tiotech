import React from 'react'
import img1_home from "../assets/img1_home.jpg";
import styled from "styled-components";

const HomeImage = () => {
    return (
        <Box>
        <img src={img1_home}/>
        </Box>
    );
    }
export default HomeImage;

const Box = styled.div`
    img{
        width: 100%;
        border-radius: 500em;
    }
`