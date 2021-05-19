import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import Button from '../comps/Button'
import BigButton from '../comps/BigButton'
import AnswerUI from '../comps/Answer'
import QuestionUI from '../comps/Question/index2'
import DotsUI from '../comps/Dots'
import NumberUI from '../comps/Number'




export default function Home() {
  return (
    <div className={styles.container}>
      <QuestionUI 
      heading="Question 1"
      content="Have you had difficulty focusing or thinking clearly about anything other than what you’re worried about?"
      />
      <br></br>
      <AnswerUI />
      <br></br>
      <div className={styles.dots_container}>
      <DotsUI />
      </div>
      <div className={styles.buttonBox}>
      <Button />
      <Button />
      </div>
      <div className={styles.number_container}>
      <NumberUI />
      </div>
    </div>

  )
}
