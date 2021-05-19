import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import TopBar from '../TopBar/index2'

const CardCont = styled.div`
  width:377px;
  height:180px;
  background-color:#82DED9;
  display:flex;
  flex-direction:column;
  text-align:center;
  color:#FFFFFF;
  font-family: 'Roboto', sans-serif;
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
heading="Question 1",
content="Have you had difficulty focusing or thinking clearly about anything other than what you’re worried about?",
}) => {

  return <CardCont >
    <TopBar />
<Heading>{heading}</Heading>
<Text>{content}</Text>
  </CardCont>
}


export default QuestionUI;