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
min:10;
max:100;
value:${props=>props.value};
readonly:readonly;
-webkit-appearance: none;
width: 100%;
height: 25px;
background: #d3d3d3;
border-radius:20px;
opacity: 0.7;
box-shadow: 0 1px 0px rgba(255,255,255,0.25),
inset 0 0 4px rgba(0,0,0,0.9);
@include border-radius(7px);
div.ui-slider-range {
display: block;
height: 7px;
@include border-radius(7px);
@include transition-property(background-color);
@include transition-duration(100ms);


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

const Ps2 = styled.p`
margin:0px;
width:80%;
justify-content:center;
font-size:12px;
color:#52A1C3;
margin-left:40px
`;
const SliderUI = ({
your_level="Anxiety disorder",
level="Mild",
value="50",
}) => {
 
  return <Cont>
    <PsCont>
    <Ps1>Your <Highlight>{your_level} </Highlight>level: <Highlight>{level}</Highlight></Ps1>
    </PsCont>
    <div>
    <Slider type="range" min="10" max="100" value={value} readOnly="readonly" className={styles.slider} /><br></br>
    
    </div>
  <PsCont>
    <Ps2>Mild</Ps2>
    <Ps2>Moderate</Ps2>
    <Ps2>Severe</Ps2>
  </PsCont>
  </Cont>
}


export default SliderUI;