import {useRouter} from 'next/router';
import {useState} from 'react';
import styles from '../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import Button from '../comps/Button/index2'
import BigButton from '../comps/BigButton/index2'
import QuestionUI from '../comps/Question/index2'
import DotsUI from '../comps/Dots'
import NumberUI from '../comps/Number/index2'




export default function Home() {

  const [buttonstate1, setButtonState1] = useState(false);  
    
  const HandleClickButtonColor1 = () =>{
      setButtonState1(!buttonstate1);
    }
  const [buttonstate2, setButtonState2] = useState(false);  
  
  const HandleClickButtonColor2= () =>{
      setButtonState2(!buttonstate2);
    }
  const [buttonstate3, setButtonState3] = useState(false);  
  
  const HandleClickButtonColor3= () =>{
        setButtonState3(!buttonstate3);
      }

  const [buttonstate4, setButtonState4] = useState(false);  

  const HandleClickButtonColor4= () =>{
        setButtonState4(!buttonstate4);
      }

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
      onClick={HandleClickButtonColor1} 
      bgcolor={buttonstate1 ? '#52A1C3' : '#DADADA'}
      />
      <BigButton
       heading="Often"
       onClick={HandleClickButtonColor2} 
      bgcolor={buttonstate2 ? '#52A1C3' : '#DADADA'}
      />
      <BigButton 
      heading="Occasionally"
      onClick={HandleClickButtonColor3} 
      bgcolor={buttonstate3 ? '#52A1C3' : '#DADADA'}
      />
      <BigButton 
      heading="Not at all"
      onClick={HandleClickButtonColor4} 
      bgcolor={buttonstate4 ? '#52A1C3' : '#DADADA'}
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
      routeTo="/question3"
      />
      <Button 
      title="NEXT"
      subtext="Question5"
      routeTo="/question5"
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
