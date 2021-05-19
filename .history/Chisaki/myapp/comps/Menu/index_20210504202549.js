import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const MenuCont = styled.div`

`;
const 
const Cont = styled.div`
width:377px;
height:476px;
position:absolute;
top: 191px;
color:#CDF0EE;
border-radius: 30px 30px 0px 0px;
`;

const HeadImg = styled.img`
align-items:right;
margin-right:20px;
`;

const Box = styled.div`
display:flex;
flex-direction:column;
`;

const Items= styled.div`
display:flex;
flex-direction:row;
`;

const Title = styled.h3`
color:#52A1C3;
text-decoration:underline;
`;
const MenuUI= ({
  
  })=>{
    const router = useRouter();
    return<Cont>
      <HeadImg src="/menu/close.png"/>
      <Box>
        <Items><img src="/menu/how.png"/><Title>How It Works</Title></Items>
        <Items><img src="/menu/about.png"/><Title>About Us</Title></Items>
        <Items><img src="/menu/test.png"/><Title>Test</Title></Items>
        <Items><img src="/menu/learn.png"/><Title>Learn</Title></Items>
        <Items><img src="/menu/suggestion.png"/><Title>Suggestions</Title></Items>
        <Items><img src="/menu/help.png"/><Title>Help Line</Title></Items>
      </Box>
    </Cont>
  }
     
    export default MenuUI;