import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const C = styled.div`
width:200px;
height:30px;
align-items:center;
margin:10px;
display:flex;
flex-direction:row;
`;
  
const Heading = styled.div`
margin:0,
justifyContent:"center",
marginBottom:5,
marginTop:5,
width:20,
height:20,
margin:5,
borderRadius:10,
backgroundColor:"#C4C4C4",
color:"#FFFFFF",
fontFamily: 'Roboto, sans-serif',
textAlign:"center",
fontSize:12,
`;

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
routeTo='/question1'
}) => {
  const router = useRouter();
  return <CardCont onClick={()=>router.push(routeTo)}>
    <Heading>{title}</Heading>
<Ps>{subtext}</Ps>
  </CardCont>
}


export default ButtonUI;