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
}
  `;
  

const UpperBox = styled.div`
  background-color:#CDF0EE;
  height:60px;
  `;
  
const Heading = styled.h3`
  margin-top:0px;
  justify-content:center;
  margin-bottom:5px;
  margin-top:5px;
  color:#52A1C3;
  font-family:Saira Semi Condensed', sans-serif;
  text-align:center;

`;

const LowerBox = styled.div`
  background-color:#FFFFFF;
  height:60px;
  flex-grow:1;
`;

const Text = styled.p`
  margin-top:0px;
  justify-content:center;
  margin-bottom:5px;
  margin-top:5px;
  color:#52A1C3;
  font-family:Saira Semi Condensed', sans-serif;
  text-align:center;
`;

const ContentUI = ({
heading="1:Anxiety disorder",
content="Symptoms can include excessive worrying, feeling agitated, restlessness, fatigue, tense muscles, difficulty sleeping, and panic attacks.",
}) => {

  return <CardCont >
    <UpperBox>
      <Heading>{heading}</Heading>
    </UpperBox>
    <LowerBox>
      <Text>{content}</Text>
    </LowerBox>
  </CardCont>
}


export default ContentUI;