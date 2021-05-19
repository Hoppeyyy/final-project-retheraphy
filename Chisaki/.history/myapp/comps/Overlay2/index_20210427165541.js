import styled from 'styled-components'
import React from 'react'

const Cont = styled.div`
position:absolute;
top:190px;
left:180px;
width:175px;
height:55px;
text-align:center;
justify-content:center;
align-items:center;
border-radius:10px;
border:3px solid #EF9595;
visibility:${props=>props.visivility};

`;

const Text = styled.p`
width:90%;
position:relative;
text-align:left;
color:#52A1C3;
margin:5px 10px;
font-size:12px;
`;

const Overlay2 = ({
visivility="hidden",
content="abc",
onClick=()=>{}  
})=> {
    return<Cont onClick={onClick} visivility={visivility} >
    <Text>{content}</Text>
    </Cont>
      
  }
  

export default Overlay2;