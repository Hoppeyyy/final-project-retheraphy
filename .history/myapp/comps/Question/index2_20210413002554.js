import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const CardCont = styled.div`
  width:375px;
  background-color:#82DED9;
  display:flex;
  flex-direction:column;
  text-align:center;
  color:#FFFFFF;
  font-family: 'Roboto', sans-serif;
  `;
  

const ImgBox = styled.img`
  width:30px;
  height:30px;
  `;
  
const Heading = styled.h4`
  margin:0px;
  margin-bottom:5px;
  margin-top:5px;
  color:#52A1C3;
`;


const Text = styled.p`
  margin-top:0px;
  justify-content:center;
  margin-bottom:5px;
  margin-top:5px;
  color:#FFFFFF;
  text-align:center;
`;

const QuestionUI = ({
heading="1:Anxiety disorder",
content="Symptoms can include excessive worrying, feeling agitated, restlessness, fatigue, tense muscles, difficulty sleeping, and panic attacks.",
}) => {

  return <CardCont >
    <ImgBox src="https:placekitten.com/50/50"></ImgBox>
    <Heading></Heading>
    <Text></Text>
  </CardCont>
}


export default QuestionUI;