import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const CardCont = styled.div`
background-color:${props=>props.bgcolor};
width:110px;
height:70px;
border-radius:10px;
display:flex;
flex-direction:column;
text-align:center;
justify-content:center;
color:#FFFFFF;
margin:10px;
font-family: 'Roboto', sans-serif;
`;
  
const Heading = styled.h4`
margin:0px;
margin-bottom:5px;
margin-top:5px;
color:#FFFFFF;
`;


const BigButtonUI = ({
bgcolor='#DADADA',
heading="Very much so",

}) => {

  return <CardCont bgcolor={bgcolor}>
    <Heading>{heading}</Heading>
  </CardCont>
}


export default BigButtonUI;