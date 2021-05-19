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
text-align:center;
`;

const Title = styled.h6`
color:#52A1C3;
justify-content:center;
`;
const Ps = styled.p`
color:#52A1C3;
`;

const HowToUI = ({
title="NEXT",
subtext="Question2",
routeTo='/question1',
bgcolor="#82DED9",

}) => {
  const router = useRouter();
  return <Cont>
    <Heading>{title}</Heading>
<Ps>{subtext}</Ps>
  </Cont>
}


export default HowToUI;