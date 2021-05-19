import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Container = styled.div`
height:30px;
align-items:center;
margin:5px;
display:flex;
flex-direction:row;
`;
  
const Dot = styled.div`
justify-content:center;
width:20px;
height:20px;
border-radius:10px;
background-color:#C4C4C4;
color:#FFFFFF;
font-family:'Roboto, sans-serif';
text-align:center;
font-size:12px;
`;



const ButtonUI = ({
title="1",
routeTo='/question1'
bgcolor='#DADADA',
}) => {
  const router = useRouter();
  return <Container onClick={()=>router.push(routeTo)}>
    <Dot>{title}</Dot>

  </Container>
}


export default ButtonUI;