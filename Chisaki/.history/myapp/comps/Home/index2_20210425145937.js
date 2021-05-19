import styles from '../../styles/'
import React from 'react'
import styled from 'styled-components';
import ButtonUI from '../Button/index2'
import {useRouter} from 'next/router' 

const CardCont = styled.div`
background:#82DED9;
width:377px;
height:667px;
text-align:center;
font-family:Roboto, sans-serif;
justify-content:center;

`;
  
const Cont = styled.div`
background:#82DED9;
width:377px;
height:667px;
text-align:center;
font-family:Roboto, sans-serif;
justify-content:center;
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
ps="Check your mental condition & Take  care your mental health",



}) => {
  const router = useRouter();
  return <CardCont>
  <Cont>
    <C1></C1>
    <C2></C2>
    <C3></C3>
    <Logo></Logo>
    <Text>{ps}</Text>
    <ButtonUI 
    title="Start"
    subtext=""
    routeTo='/intro'
    bgcolor="#52A1C3"
    />
  </Cont>
  </CardCont>
}


export default HomeUI;