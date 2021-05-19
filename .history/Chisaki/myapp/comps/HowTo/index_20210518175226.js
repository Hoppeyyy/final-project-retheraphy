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
font-family:Roboto, sans-serif;
justify-content:center;
`;

const Columns = styled.div`
display:flex;
flex-direction:column;
`;
const Buttons = styled.div`
width:150px;
height:30px;
background-color:#EF9595;
border-radius:10px;
text-align:center;
margin-bottom:4px;

`;
const Title= styled.p`
color:#52A1C3;
justify-content:center;
margin-top:7px;
font-size:16px;
font-weight:bold;
`;

const Ps = styled.p`
color:#52A1C3;
font-size:16px;
margin:0; 
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
className={styles.hoverbtn}
><Title className={styles.hoverbtn}>{title}</Title></Buttons>
    <Ps>{subtext}</Ps>
    </Columns>
  </Cont>
}


export default HowToUI;