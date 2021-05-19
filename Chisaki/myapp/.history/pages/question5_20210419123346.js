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

       {/*Question Card 5 (text changeable)*/}
    <div className={styles.container}>
      <QuestionUI 
      heading="Question 5"
      content="Do you find yourself behave risky/unsafe in a way that isn’t normal for you?"
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
      subtext="Question4"
      routeTo='question4'
      />
      <Button 
      title="NEXT"
      subtext="Question6"
      />
      </div>
      <div className={styles.number_container}>
      <NumberUI 
      title="5/6"
      />
      </div>
    </div>
      </div>

    

  )
}