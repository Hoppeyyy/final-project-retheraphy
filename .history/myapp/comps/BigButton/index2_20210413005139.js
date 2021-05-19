import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const CardCont = styled.div`
background-color:#DADADA;
width:110px;
height:70px;
border-radius:10px;
display:flex;
flex-direction:column;
text-align:center;
justify-content:center;
color:#FFFFFF";
font-family:Roboto, sans-serif;
margin:10px;
  `;
  
const Heading = styled.h3`
margin:0px;
margin-bottom:5px;
margin-top:5px;
color
`;


const BigButtonUI = ({
heading="Very much so",

}) => {

  return <CardCont >
    <Heading>{heading}</Heading>
  </CardCont>
}


export default BigButtonUI;