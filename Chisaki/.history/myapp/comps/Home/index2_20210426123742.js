import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 
import ButtonUI from '../Button/index2'
import styles from '../../styles/Home.module.css'
import TopBar from '../TopBar/index2';

const Phone = styled.img`
width:377px;
`;
const CardCont = styled.div`
background:#82DED9;
width:377px;
height:667px;
text-align:center;
justify-content:center;

`;
  
const Cont = styled.div`
background:#82DED9;
width:377px;
text-align:center;
font-family:Roboto, sans-serif;
justify-content:center;
align-items:center;
position:absolute;
top:60px;
`;

const C1 = styled.div`
justify-content:center;
align-items:center;
background:#FFFFFF;
opacity:0.15;
border-radius: 50%;
width: 377px;
height: 377px;
position:absolute;
top:80px;
`;

const C2 = styled.div`
justify-content:center;
align-items:center;
background:#FFFFFF;
opacity:0.15;
border-radius: 50%;
width: 340px;
height: 340px;
position:absolute;
left:20px;
top:100px;
`;

const C3 = styled.div`
justify-content:center;
align-items:center;
background:#FFFFFF;
opacity:0.15;
border-radius: 50%;
width: 303px;
height: 303px;
position:absolute;
left:40px;
top:120px;
`;

const Logo = styled.img`
position:absolute;
top:200px;
left:115px;
width:150px;
`;

const Text = styled.p`
color:#FFFFFF;
position:absolute;
width:60%;
top:230px;
left:80px;
`;

const HomeUI = ({
ps="Check your mental condition & Take  care your mental health",



}) => {
  const router = useRouter();
  return <Phone src="/image/phone.jpeg">
  <CardCont>
    <TopBar 
    visibility="hidden"
    />
  <Cont>
    <C1></C1>
    <C2></C2>
    <C3></C3>
    <Logo src="/apps_pic/logo.png"></Logo>
    <Text>{ps}</Text>
    <div className={styles.HomeBox}>
      <ButtonUI 
      title="Start"
      subtext=""
      routeTo='/intro'
      bgcolor="#52A1C3"
      />
      </div>
  </Cont>
  </CardCont>
  </Phone>
}


export default HomeUI;