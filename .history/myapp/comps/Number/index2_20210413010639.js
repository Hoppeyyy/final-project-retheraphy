import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const CardCont = styled.div`
width:200px;
height:30px;
align-items:center;
margin:10px;
text-align:center;
  `;
  


const Ps = styled.p`
margin:0px;
justifyContent:"center",
marginBottom:5,
marginTop:5,
color:"#52A1C3",
fontFamily: 'Roboto, sans-serif',
textAlign:"center",
`;

const NumberUI = ({
title="1/6",

}) => {

  return <CardCont >
<Ps>{title}</Ps>
  </CardCont>
}


export default NumberUI;