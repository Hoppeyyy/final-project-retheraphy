import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const CardCont = styled.div`
background-color:#82DED9;
width:100px,
height:50,
borderRadius:10,
display:"flex",
flexDirection:"column",
textAlign:"center",
color:"#FFFFFF",
fontFamily: 'Roboto, sans-serif',
margin:10,
justifyContent:"center",
  `;
  
const Heading = styled.h3`
margin:0px;
margin-bottom:5px;
margin-top:5px;
margin:10px;
color:#FFFFFF;
`;


const BigButtonUI = ({
heading="Very much so",

}) => {

  return <CardCont >
    <Heading>{heading}</Heading>
  </CardCont>
}


export default BigButtonUI;