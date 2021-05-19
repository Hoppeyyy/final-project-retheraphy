import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styled.div`
display:flex;
flex-direction:column;
width:90%;
`;
  
const Slider = styled.input`
display:flex;
min-value:0;
max-value:100;
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
font-weight:bold;
color:#78CDC8;
font-family:"Saira Semi Condensed', sans-serif";
`;

const FolderUI = ({
your_level="Anxiety disorder",
level
}) => {
 
  return <Cont>
    <PsCont>
    <Ps1>Healthy levlel</Ps1>
<Ps2>Your {your_level} level: {level}</Ps2>
    </PsCont>
    <Slider type="range"></Slider>
  </Cont>
}


export default FolderUI;