// don't use anymore



import BigButton from '../BigButton/index2'
import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const Answerbox = styled.div`
  width:375px;
  background-color:#FFFFFF;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AnswerUI = ({

}) =>
{

  return
    <Answerbox>
    <BigButton 
    heading="Very much so"
    />
    <BigButton 
    heading="Often"
    />
    <BigButton 
    heading="Occasionally"
    />
    <BigButton 
    heading="Not at all"
    />
    </Answerbox>
  
}

export default AnswerUI;

