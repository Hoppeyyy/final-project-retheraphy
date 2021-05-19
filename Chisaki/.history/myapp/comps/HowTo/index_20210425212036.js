import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 
import ImgBoxUI from '../ImgBox/index2'


const Cont = styled.div`
width:90%;
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

`;
const Title= styled.p`
color:#52A1C3;
justify-content:center;
margin-top:0;
font-size:13px;
`;

const Ps = styled.p`
color:#52A1C3;
`;

const HowToUI = ({
title="Take the test",
subtext="Complete the 6 Questions test",
routeTo='/terms',
src="/apps_pic/test.jpg"

}) => {
  const router = useRouter();
  return <Cont>
    <ImgBoxUI 
    src={src}
    />
    <Columns>
<Buttons
onClick={()=>router.push(routeTo)}
><Title>{title}</Title></Buttons>
    <Ps>{subtext}</Ps>
    </Columns>
  </Cont>
}


export default HowToUI;