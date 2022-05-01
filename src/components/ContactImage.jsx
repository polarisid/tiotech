import React from 'react'
import contato from "../assets/contato.jpg";
import styled from "styled-components";

const ContactImage = () => {
    return (
        <Box>
        <img src={contato}/>
        </Box>
    );
    }
export default ContactImage;

const Box = styled.div`
    img{
        width: 100%;
        border-radius: 500em;
    }
`