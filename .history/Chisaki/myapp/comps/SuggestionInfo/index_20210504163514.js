import React from 'react'
import styles from '../../styles/Home.module.css'
import styled from 'styled-components';

const Tabs = styled.div`
background-color:${props=>props.bg};
border-radius:10px;
width: 90%;
height: 410px;
align-items:center;
display:flex;
flex-direction:column;
text-align: center;
color:#52A1C3;
margin:20px;
`;
const Headstick = styled.img`
width:50px;
height:50px;
justify-content:center;
align-items:center;
position:absolute;
top:150px;
`;
const Tit = styled.h3`
margin:0;
font-size: 18px;
text-align: center;
color:#52A1C3;
justify-content:center;
align-content: center;
position:relative;
top:70px
`;
const Detail = styled.div`
font-size: 16px;
line-height: 25px;
text-align: center;
margin-left:10px;
margin-right:10px;
justify-content:center;
color: #52A1C3;
position:relative;
top:70px
`;


const SuggestionInfo = ({
    bgcolor="#FAF4F0",
    src="",
    title="",
    content="",
  }) =>{
    return <Tabs bg={bgcolor}>
      <Headstick src={src}/>
      <Tit>{title}</Tit>
  <Detail>{content}</Detail>
    </Tabs>

}

export default SuggestionInfo