import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

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
margin-right:
`;
const Menu= ({
  
  })=>{
    const router = useRouter();
    return<Cont>
      <HeadImg src="/menu/close.png"/>
    </Cont>
  }
     
    export default Menu;