
import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const BorderStyle = styled.div`
    height:200px;
    width:377px;
    border:#82DED9 solid 2px;
   
    `;


const BpStyle = styled.p`

color:#52A1C3;
font-family: 'Saira Semi Condensed', sans-serif;
text-align:left;
font-size:16px;
width:370px;
`;

const BorderUI=({
    
    })=> {
        return (
      <BorderStyle>
          <BpStyle>Psychological tests are formalized measures of mental functioning. Most are objective and quantifiable;</BpStyle>
          <BpStyle>however, certain projective tests may involve some level of subjective interpretation. Also known as inventories, measurements, questionnaires, and scales, psychological tests are administered in a variety of settings, including preschools, primary and secondary schools, colleges and universities, hospitals, outpatient healthcare settings, and social agencies. </BpStyle>
          <BpStyle>They come in a variety of formats, including written, verbal, and computer administered.</BpStyle>
      </BorderStyle>
    )
} 
export default BorderUI;