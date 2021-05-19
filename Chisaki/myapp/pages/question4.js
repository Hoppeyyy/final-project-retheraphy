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


var answers4 = null;

export default function Question4() {

  const [buttonstate1, setButtonState1] = useState(0);  
    
  const HandleClickButtonColor1 = () =>{
      setButtonState1(1);
      sessionStorage.setItem("question4", 50)
     
    }

  
  const HandleClickButtonColor2= () =>{
    setButtonState1(2);
    sessionStorage.setItem("question4", 35)
   
    }
  
  
  const HandleClickButtonColor3= () =>{
        setButtonState1(3);
        sessionStorage.setItem("question4",20)
       
      }

 

  const HandleClickButtonColor4= () =>{
        setButtonState1(4);
        sessionStorage.setItem("question4",5)
   
      }

  const HandleEnd = () =>{
        console.log(answers4);
        sessionStorage.setItem("question4", answers4)
        router.push("/result")
      }

  const router = useRouter();
  return (
  <div className={styles.base}>

      {/*Question Card 4 (text changeable)*/}
    <div className={styles.container}>
      <QuestionUI 
      heading="Question 4"
      content="Have you felt any positive mood in the activities you have gone through in the past two weeks?"
      />
      <br></br>
      <div className={styles.answerbox}>
      <BigButton 
      heading="Always"
      onClick={() =>{
        HandleClickButtonColor1();
       
      }} 
      bgcolor={buttonstate1===1 ? '#52A1C3' : '#DADADA'}
      />
      <BigButton
       heading="Often"
       onClick={()=>{
        HandleClickButtonColor2();
       
      }} 
      bgcolor={buttonstate1===2 ? '#52A1C3' : '#DADADA'}
      />
      <BigButton 
      heading="Occasionally"
      onClick={()=>{
        HandleClickButtonColor3();
        
      }} 
      bgcolor={buttonstate1===3 ? '#52A1C3' : '#DADADA'}
      />
      <BigButton 
      heading="Not at all"
      onClick={()=>{
        HandleClickButtonColor4();
        
      }} 
      bgcolor={buttonstate1===4 ? '#52A1C3' : '#DADADA'}
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
      bgcolor='#52A1C3'
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
      subtext="Question3"
      routeTo="/question3"
      display="block"
      />
      <Button 
      title="NEXT"
      subtext="Question5"
      routeTo="/question5"
      display="block"
      onClick={HandleEnd}
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
