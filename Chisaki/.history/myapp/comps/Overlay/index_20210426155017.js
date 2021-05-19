import styled from 'styled-components'
import React from 'react'

const Cont = styled.div`
position:absolute;
top:150px;
left:190px;
width:175px;
height:65px;
text-align:center;
justify-content:center;
align-items:center;
background-color:#C4C4C4;
border-radius:10px;
opacity:0.8;
visibility:${props=>props.visivility};

`;

const Text = styled.p`
width:70%;
position:relative;
text-align:left;
color:#52A1C3;
margin:5px 20px;
font-size:12px;

`;

const Overlay = ({
visivility="hidden",
content="abc",
onClick=()=>{}  
})=> {
    return<Cont onClick={onClick} visivility={visivility} >
    <Text>{content}</Text>
    </Cont>
      
  }
  

export default Overlay;