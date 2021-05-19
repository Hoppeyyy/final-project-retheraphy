
import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const BorderStyle = styled.div`
    height:500px;
    width:375px;
    border:#82DED9 solid 2px;
    overflow:auto;
    `;


const BpStyle = styled.p`
overflow:scroll;
color:#52A1C3;
font-family: 'Saira Semi Condensed', sans-serif;
text-align:left;
text-indent:20px;
font-size:16px;
width:370px;
`;

const BorderUI=({
    content="abc"
    })=> {
        return (
      <BorderStyle>
          <BpStyle></BpStyle>
      </BorderStyle>
    )
} 
export default BorderUI;