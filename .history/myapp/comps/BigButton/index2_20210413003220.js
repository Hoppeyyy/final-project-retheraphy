import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const CardCont = styled.div`
background-color:#DADADA;
width:110px;
height:70px;
border-radius:10px;
display:flex;
flex-direction:column;
text-align:center;
justify-content:center;
color:#FFFFFF";
font-family:Roboto, sans-serif;
margin:10px;
  `;
  
const Heading = styled.h3`
margin:0px;
marginBottom:5,
marginTop:5,
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
    <ImgBox src="https:placekitten.com/50/50"></ImgBox>
<Heading>{heading}</Heading>
<Text>{content}</Text>
  </CardCont>
}


export default QuestionUI;