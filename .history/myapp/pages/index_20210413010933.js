import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import Button from '../comps/Button/index2'
import BigButton from '../comps/BigButton/index2'
import QuestionUI from '../comps/Question/index2'
import DotsUI from '../comps/Dots'
import NumberUI from '../comps/Number/index2'




export default function Home() {
  return (
    
    <div className={styles.container}>
      <QuestionUI 
      heading="Question 1"
      content="Have you had difficulty focusing or thinking clearly about anything other than what you’re worried about?"
      />
      <br></br>
      <div className={styles.answerbox}>
      <BigButton 
      heading="very much so"
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
      </div>
      <br></br>
      <div className={styles.dots_container}>
      <DotsUI />
      </div>
      <div className={styles.buttonBox}>
      <Button 
      title="NEXT"
      subtext="Question2"
      />
      </div>
      <div className={styles.number_container}>
      <NumberUI 
      title="1/6"
      />
      </div>
    </div>

    

  )
}
