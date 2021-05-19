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

   {/*Question Card 6 (text changeable)*/}
   <div className={styles.container}>
      <QuestionUI 
      heading="Last Question"
      content="How ofther do u encounter with acing thoughts; jumping quickly from one idea to the next?"
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
      title="Review"
      subtext="Questions"
      routeTo="/question5"
      />
      <Button 
      title="Submit"
      subtext=""
      routeTo="/suggest"
      />
      </div>
      <div className={styles.number_container}>
      <NumberUI 
      title="6/6"
      />
      </div>
    </div>
    </div>

    

  )
}
