import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
flex-direction:column
`;
  
const Title = styled.h3`
font-family:Roboto, sans-serif;
font-weight:bold;
font-size:30px;
line-height:47px;
color:#52A1C3;
margin:0;
margin-top:30px;
margin-left:20px;
`;
const Sub = styled.p`
font-family:Roboto, sans-serif;
color:#52A1C3;
text-align:center;
font-weight:regular;
line-height:30px;
display:${props=>props.display}
`;
const Wrap = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`;
const Img = styled.img`
width:${props=>props.width}px;
height:${props=>props.height}px;
`;

const ResultUI = ({
src="",
width="",
height="",
h3="",
content="",
display=""

}) => {

  return <Cont>
    <Wrap>
<Title>{h3}</Title>
    <Img 
    src={src}
    width={width}
    height={height}
    />
    </Wrap>
<Sub display={display}>{content}</Sub>
  </Cont>
}


export default ResultUI;