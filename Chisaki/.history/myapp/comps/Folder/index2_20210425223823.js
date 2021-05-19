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
input[range]::-webkit-slider-runnable-track{background}
`;

const Ps = styled.p`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:12px;
`;

const FolderUI = ({
subtext="Healthy level",
}) => {
 
  return <Cont>
    <Ps>{subtext}</Ps>
    <Slider type="range"></Slider>
  </Cont>
}


export default FolderUI;