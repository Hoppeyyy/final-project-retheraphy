import {useRouter} from 'next/router';
import {useState} from 'react';
import styles from '../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import Button from '../comps/Button/index2'
import BigButton from '../comps/BigButton/index2'
import QuestionUI from '../comps/Question/index2'
import DotsUI from '../comps/Dots/index2'
import NumberUI from '../comps/Number/index2'



var answers5 = null;

export default function Question5() {

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

  const HandleAnswer = (number) =>{
        console.log(number);
        answers5 = number;
      }
    
  const HandleEnd = () =>{
        console.log(answers5);
        sessionStorage.setItem("response", answers5)
        router.push("/result")
      }
  const router = useRouter();
  return (
  <div className={styles.base}>

       {/*Question Card 5 (text changeable)*/}
    <div className={styles.container}>
      <QuestionUI 
      heading="Question 5"
      content="Do you find yourself behave risky/unsafe in a way that isn’t normal for you?"
      />
      <br></br>
      <div className={styles.answerbox}>
      <BigButton 
      heading="Always"
      number="50"
      onClick={() =>{
        HandleClickButtonColor1();
        HandleAnswer("50");
      }} 
      bgcolor={buttonstate1 ? '#52A1C3' : '#DADADA'}
      />
      <BigButton
       heading="Often"
       number="35"
       onClick={()=>{
        HandleClickButtonColor2();
        HandleAnswer("35");
      }} 
      bgcolor={buttonstate2 ? '#52A1C3' : '#DADADA'}
      />
      <BigButton 
      heading="Occasionally"
      number="20"
      onClick={()=>{
        HandleClickButtonColor3();
        HandleAnswer("20");
      }} 
      bgcolor={buttonstate3 ? '#52A1C3' : '#DADADA'}
      />
      <BigButton 
      heading="Not at all"
      number="5"
      onClick={()=>{
        HandleClickButtonColor4();
        HandleAnswer("5");
      }} 
      bgcolor={buttonstate4 ? '#52A1C3' : '#DADADA'}
      />
      </div>
      <br></br>
      <div className={styles.dots_container}>
      <DotsUI 
      title="1"
      routeTo='/question1'
      />
      <DotsUI 
      title="2"
      routeTo='/question2'
      />
      <DotsUI 
      title="3"
      routeTo='/question3'
      />
      <DotsUI 
      title="4"
      routeTo='/question4'
      />
      <DotsUI 
      title="5"
      routeTo='/question5'
      bgcolor='#52A1C3'
      />
      <DotsUI 
      title="6"
      routeTo='/question6'
      />
      </div>
      <div className={styles.buttonBox}>
      <Button 
      title="BACK"
      subtext="Question4"
      routeTo='/question4'
      bgcolor="#52A1C3"
      />
      <Button 
      title="NEXT"
      subtext="Question6"
      routeTo='/question6'
      bgcolor="#52A1C3"
      onClick={HandleEnd}
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