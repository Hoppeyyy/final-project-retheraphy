import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styled.div`
display:flex;
justify-content:space-between',
`;
  
const Dot = styled.div`
justify-content:center;
width:20px;
height:20px;
border-radius:10px;
background:${props=>props.bgcolor};

`;
const Number = styled.p`
color:#FFFFFF;
font-family:'Roboto, sans-serif';
text-align:center;
font-size:12px;
justify-content:center;
margin-top:1.5px;
`;


const ButtonUI = ({
title="1",
routeTo='/question1',
bgcolor='#C4C4C4',


}) => {
  const router = useRouter();
  return <Container onClick={()=>router.push(routeTo)}>
    <Dot bgcolor={bgcolor}><Number>{title}</Number></Dot>

  </Container>
}


export default ButtonUI;