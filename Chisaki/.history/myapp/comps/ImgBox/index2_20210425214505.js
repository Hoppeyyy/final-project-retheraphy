import styled from 'styled-components';
import React from 'react'


const Container = styled.div`
width:377px;
jus
`;
  
const Img = styled.img`
margin:0px;
width:${props=>props.width}px;
height:${props=>props.height}px;
`;


const ImgBoxUI = ({
src="",
width="100px",
height="80px",
}) => {
 
  return (<Container>
    <Img
    src={src} 
    width={width} 
    height={height} />
  </Container>
  )
}


export default ImgBoxUI;