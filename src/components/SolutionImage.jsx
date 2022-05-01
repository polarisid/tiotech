import React from 'react'
import solutions from "../assets/solutions.jpg";
import styled from "styled-components";

const SolutionImage = () => {
    return (
        <Box>
        <img src={solutions}/>
        </Box>
    );
    }
export default SolutionImage;

const Box = styled.div`
    img{
        width: 100%;
        border-radius: 500em;
    }
`