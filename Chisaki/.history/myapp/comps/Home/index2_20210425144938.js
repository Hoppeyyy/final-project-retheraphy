import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import ButtonUI from '../Button/index2'
import {useRouter} from 'next/router' 

const CardCont = styled.div`
background:${props=>props.bgcolor};
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
  
const Cont = styled.div`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
`;

const C1 = styled.div`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:12px;
`;

const C2 = styled.div`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:12px;
`;

const C3 = styled.div`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:12px;
`;

const Logo = styled.img`
`;

const Text = styled.p`

`;

const HomeUI = ({
title="NEXT",
subtext="Question2",
routeTo='/question1',
bgcolor="#82DED9",

}) => {
  const router = useRouter();
  return <Cont>
 <C1></C1>
  </Cont>
}


export default HomeUI;