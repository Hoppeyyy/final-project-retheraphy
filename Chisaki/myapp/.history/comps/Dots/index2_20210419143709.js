import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Container = styled.div`
width:200px;
height:30px;
align-items:center;
margin:10px;
display:flex;
flex-direction:row;
`;
  
const Dot = styled.div`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
width:20px;
height:20px;
margin:5px;
border-radius:10px;
background-color:#C4C4C4;
color:#FFFFFF,
font-family: 'Roboto, sans-serif';
textAlign:"center",
fontSize:12,
`;



const ButtonUI = ({
title="NEXT",
subtext="Question2",
routeTo='/question1'
}) => {
  const router = useRouter();
  return <CardCont onClick={()=>router.push(routeTo)}>
    <Heading>{title}</Heading>
<Ps>{subtext}</Ps>
  </CardCont>
}


export default ButtonUI;