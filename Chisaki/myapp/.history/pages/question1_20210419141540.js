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
      
      const [buttonstate3, setButtonState3] = useState(false);  
  const HandleClickButtonColor4= () =>{
        setButtonState4(!buttonstate4);
      }
  const router = useRouter();
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
       onClick={HandleClickButtonColor1} 
       bgcolor={buttonstate1 ? '#52A1C3' : '#DADADA'}
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
      routeTo="/question2"
      />
      </div>
      <div className={styles.number_container}>
      <NumberUI 
      title="1/6"
      />
      </div>
    </div>
    </div>

    

  )
}
