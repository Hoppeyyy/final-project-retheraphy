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
  <div className={styles.main_container}>

  {/*Question Card 1 (text changeable)*/}
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

      {/*Question Card 2 (text changeable)*/}
    <div className={styles.container}>
      <QuestionUI 
      heading="Question 2"
      content="The parts of your body (such as hands/legs) trembling or muscles twitching unnaturally"
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
      subtext="Question1"
      />
      <Button 
      title="NEXT"
      subtext="Question3"
      />
      </div>
      <div className={styles.number_container}>
      <NumberUI 
      title="2/6"
      />
      </div>
    </div>

      {/*Question Card 3 (text changeable)*/}
      <div className={styles.container}>
      <QuestionUI 
      heading="Question 3"
      content="How often have you experienced feelings of low, depression, or hopelessness?"
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
      subtext="Question2"
      />
      <Button 
      title="NEXT"
      subtext="Question4"
      />
      </div>
      <div className={styles.number_container}>
      <NumberUI 
      title="3/6"
      />
      </div>
    </div>

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
      subtext="Question5"
      />
      <Button 
      title="NEXT"
      subtext="Question3"
      />
      </div>
      <div className={styles.number_container}>
      <NumberUI 
      title="4/6"
      />
      </div>
    </div>

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
      />
      <Button 
      title="NEXT"
      subtext="Question6"
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
