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


var answers2 = null;

export default function Question2() {

  const [buttonstate1, setButtonState1] = useState(0);  
    
  const HandleClickButtonColor1 = () =>{
      setButtonState1(1);
      sessionStorage.setItem("question2", 50)
     
    }

  
  const HandleClickButtonColor2= () =>{
    setButtonState1(2);
    sessionStorage.setItem("question2", 35)
   
    }
  
  
  const HandleClickButtonColor3= () =>{
        setButtonState1(3);
        sessionStorage.setItem("question2",20)
       
      }

 

  const HandleClickButtonColor4= () =>{
        setButtonState1(4);
        sessionStorage.setItem("question2",5)
   
      }

  const HandleEnd = () =>{
        console.log(answers2);
        sessionStorage.setItem("question2", answers2)
        router.push("/result")
      }

  const router = useRouter();
  return (
  <div className={styles.base}>

   {/*Question Card 2 (text changeable)*/}
   <div className={styles.container}>
      <QuestionUI 
      heading="Question 2"
      content="The parts of your body (such as hands/legs) trembling or muscles twitching unnaturally"
      />
      <br></br>
      <div className={styles.answerbox}>
      <BigButton 
      heading="Always"
      onClick={() =>{
        HandleClickButtonColor1();
        HandleAnswer("Always");
      }} 
      bgcolor={buttonstate1 ? '#52A1C3' : '#DADADA'}
      />
      <BigButton
       heading="Often"
       onClick={()=>{
        HandleClickButtonColor2();
        HandleAnswer("Often");
      }} 
      bgcolor={buttonstate2 ? '#52A1C3' : '#DADADA'}
      />
      <BigButton 
      heading="Occasionally"
      onClick={()=>{
        HandleClickButtonColor3();
        HandleAnswer("Occasionally");
      }} 
      bgcolor={buttonstate3 ? '#52A1C3' : '#DADADA'}
      />
      <BigButton 
      heading="Not at all"
      onClick={()=>{
        HandleClickButtonColor4();
        HandleAnswer("Not at all");
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
      bgcolor='#52A1C3'
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
      />
      <DotsUI 
      title="6"
      routeTo='/question6'
      />
      </div>
      <div className={styles.buttonBox}>
      <Button 
      title="BACK"
      subtext="Question1"
      routeTo="/question1"
      bgcolor="#52A1C3"
      />
      <Button 
      title="NEXT"
      subtext="Question3"
      routeTo="/question3"
      bgcolor="#52A1C3"
      onClick={HandleEnd}
      />
      </div>
      <div className={styles.number_container}>
      <NumberUI 
      title="2/6"
      />
      </div>
      </div>
    </div>

    

  )
}
