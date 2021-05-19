import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styled.div`
display:flex;
flex-direction:column;
width:90%;
margin-left:20px;
`;
  
const Slider = styled.input`
display:flex;
min-value:0;
max-value:100;
-webkit-appearance: none;
width: 100%;
height: 25px;
background: #d3d3d3;
border-radius:20px;
opacity: 0.7;

`;
const Result = styled.output`
  background: #52A1C3;
  color: white;
  width:20px;
  
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
`;
const PsCont =styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;

`;
const Ps1 = styled.p`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:12px;
color:#52A1C3;
font-family:"Saira Semi Condensed', sans-serif";
`;

const Ps2 = styled.p`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:13px;
color:#78CDC8;
font-family:"Saira Semi Condensed', sans-serif";
`;

const Highlight = styled.strong`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:15px;
font-weight:bold;
color:#78CDC8;
font-family:"Saira Semi Condensed', sans-serif";
`;
const SliderUI = ({
your_level="Anxiety disorder",
level="Mild"
}) => {
 
  return <Cont>
    <PsCont>
    <Ps1>Healthy level</Ps1>
<Ps2>Your <Highlight>{your_level} </Highlight>level: <Highlight>{level}</Highlight></Ps2>
    </PsCont>
    <Slider type="range" className={styles.slider}></Slider><br></br>
    <Result className={styles.bubble}/>
  </Cont>
}


export default SliderUI;