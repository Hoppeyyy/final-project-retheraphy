import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 
import ImgBoxUI from '../ImgBox/index2'


const Cont = styled.div`
width:377px;
height:100px;
display:flex;
flex-direction:row;
text-align:center;
font-family: 'Saira Semi Condensed', sans-serif;
justify-content:center;
`;

const Columns = styled.div`
display:flex;
flex-direction:column;
`;
const Buttons = styled.div`
width:170px;
height:25px;
background-color:#DADADA;
border-radius:10px;
text-align:center;
positioin:absolute;
top:0;
`;
const Title= styled.p`
color:#52A1C3;
justify-content:center;
position:absolute;
top:0;
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
    <ImgBoxUI 
    src="/apps_pic/test.jpg"
    />
    <Columns>
    <Buttons><Title>Take the test</Title></Buttons>
    <Ps>{subtext}</Ps>
    </Columns>
  </Cont>
}


export default HowToUI;