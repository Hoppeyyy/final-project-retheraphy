import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const CardCont = styled.div`
background-color:#82DED9;
width:100px;
height:50px;
border-radius:10px;
display:flex;
flex-direction:column;
text-align:center;
color:#FFFFFF;
font-family:Roboto, sans-serif;
margin:10px;
justify-content:center;
  `;
  
const Heading = styled.h4`
margin:0px;
justifyContent:"center",
marginBottom:5,
marginTop:5,
`;


const BigButtonUI = ({
heading="Very much so",

}) => {

  return <CardCont >
    <Heading>{heading}</Heading>
  </CardCont>
}


export default BigButtonUI;