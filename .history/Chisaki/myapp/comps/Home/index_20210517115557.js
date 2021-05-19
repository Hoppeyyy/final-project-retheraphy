import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 
import ButtonUI from '../Button/index2'
import styles from '../../styles/Home.module.css'
import { keyframes } from 'styled-components'


const BreathAnimation = keyframes`
0% { transform: scale(.5, .5); opacity: .2;}
100% { transform: scale(2.5, 2.5); opacity: 0; }
`

const CardCont = styled.div`
background:#82DED9;
width:100vw;
height:100vh;
text-align:center;
justify-content:center;

`;
  
const Cont = styled.div`
background:#82DED9;
width:100%;
height:100%;
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
border-radius: 50%;
width: 100%;
height: 100%;
position:absolute;
top:80px;
animation-name: ${BreathAnimation};
animation-duration: 8s;
animation-delay: -2s;
animation-iteration-count: infinite;
`;

const C2 = styled.div`
justify-content:center;
align-items:center;
background:#FFFFFF;
border-radius: 50%;
width: 95%;
height: 95%;
position:absolute;
left:20px;
top:100px;
animation-name: ${BreathAnimation};
animation-duration: 8s;
animation-delay: -1s;
animation-iteration-count: infinite;
`;

const C3 = styled.div`
justify-content:center;
align-items:center;
background:#FFFFFF;
border-radius: 50%;
width: 90%;
height: 90%;
position:absolute;
left:40px;
top:120px;
animation-name: ${BreathAnimation};
animation-duration: 8s;
animation-delay: 0s;
animation-iteration-count: infinite;
`;

const Logo = styled.img`
text-align:center;
justify-content:center;
width:150px;
`;

const Text = styled.p`
color:#FFFFFF;
text-align:center;
justify-content:center;
width:
`;

const HomeUI = ({
ps="Check your mental condition  Take  care your mental health Privode help information",



}) => {
  const router = useRouter();
  return <CardCont>
  <Cont>
    <C1></C1>
    <C2></C2>
    <C3></C3>
    <div className={styles.HomeText}>
    <Logo src="/apps_pic/logo.png"></Logo>
    <Text>{ps}</Text>
    </div>
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
  
}


export default HomeUI;