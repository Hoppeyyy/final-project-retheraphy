import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const CardCont = styled.div`
width:200,
height:30,
alignItems:"center",
margin:10,
textAlign:"center",
  `;
  
const Heading = styled.h4`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
`;

const Ps = styled.p`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
`;

const NumberUI = ({
title="1/6",

}) => {

  return <CardCont >
<Ps>{title}</Ps>
  </CardCont>
}


export default NumberUI;