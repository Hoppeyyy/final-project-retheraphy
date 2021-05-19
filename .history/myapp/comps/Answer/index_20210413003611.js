import BigButton from '../BigButton/index2'
import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

function AnswerUI (){
  return(
    <div className={styles.answerbox}>
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
    headingNot at all
    />
    </div>
  )
}

export default AnswerUI;