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
justify-content:"center",
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