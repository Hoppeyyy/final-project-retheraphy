import {useRouter} from 'next/router';
import styles from '../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import Button from '../comps/Button/index2'
import BigButton from '../comps/BigButton/index2'
import QuestionUI from '../comps/Question/index2'
import DotsUI from '../comps/Dots'
import NumberUI from '../comps/Number/index2'




export default function Home() {
  const router = useRouter();
  return (
  <div className={styles.main_container}>

      {/*Question Card 4 (text changeable)*/}
    <div className={styles.container}>
      <QuestionUI 
      heading="Question 4"
      content="Have you felt any interest or pleasure in activities in the past 2 weeks?"
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
      title="BACK"
      subtext="Question3"
      routeTo="/quetion3"
      />
      <Button 
      title="NEXT"
      subtext="Question5"
      routeTo="question5"
      />
      </div>
      <div className={styles.number_container}>
      <NumberUI 
      title="4/6"
      />
      </div>
    </div>
      </div>

    

  )
}
