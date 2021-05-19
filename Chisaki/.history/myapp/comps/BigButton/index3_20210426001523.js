import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const CardCont = styled.div`
background:#52A1C3;
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
heading="Very much so",
routeTo="/",


}) => {
  const router = useRouter();
  return <CardCont onClick={()=>router.push(routeTo)}>
    <Heading>{heading}</Heading>
  </CardCont>
}


export default BigButtonUI;