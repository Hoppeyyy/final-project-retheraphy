import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 
import ImgBox from '../ImgBox/index2'

const Cont = styled.div`
width:377px;
height:100px;
display:flex;
flex-direction:row;
text-align:center;
font-family: 'Saira Semi Condensed', sans-serif;
justify-content:center;
`;
  
const Buttons = styled.div`
width:170px;
height25px;
background:#DADADA,
border-radius:10px;
`;

const Title = styled.
const Ps = styled.p`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:12px;
`;

const ButtonUI = ({
title="NEXT",
subtext="Question2",
routeTo='/question1',
bgcolor="#82DED9",

}) => {
  const router = useRouter();
  return <CardCont onClick={()=>router.push(routeTo)} bgcolor={bgcolor}>
    <Heading>{title}</Heading>
<Ps>{subtext}</Ps>
  </CardCont>
}


export default ButtonUI;