import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import ButtonUI from '../Button/index2'
import {useRouter} from 'next/router' 

const CardCont = styled.div`
background:${props=>props.bgcolor};
width:377px;
height:667px;
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
ps="Check your mental condition & Take  care your mental health",



}) => {
  const router = useRouter();
  return <Cont>
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
}


export default HomeUI;