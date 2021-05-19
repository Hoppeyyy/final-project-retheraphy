import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SliderUI from '../comps/Slider/index2'
import TopBar from '../comps/TopBar/index2'
import ResultUI from '../comps/Result'
import ButtonUI from '../comps/Button/index2'
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';


export default function Result() {
  const router = useRouter();

  const [response1, setResponse1] = useState(null);
  const [response2, setResponse2] = useState(null);
  const [response3, setResponse3] = useState(null);
  const [level, setLevel]= useState(null);

  useEffect(()=>{
    if(process.browser){
      var answers1 = sessionStorage.getItem("question1");
      var answers2 = sessionStorage.getItem("question2");
      var answers3 = sessionStorage.getItem("question3");
      var answers4 = sessionStorage.getItem("question4");
      var answers5 = sessionStorage.getItem("question5");
      var answers6 = sessionStorage.getItem("question6");

      var A = Number(answers1) + Number(answers2)
      var B = Number(answers3) + Number(answers4)
      var C = Number(answers5) + Number(answers6)
      
      setResponse1(A);
      setResponse2(B);
      setResponse3(C);
    

      // console log the items
     
      console.log(A);
      console.log(B);
      console.log(C);

  
        if (A<= 51)
        {
          setLevel(Ser)
        }
      }
  },[]);
  
  return (
    <div className={styles.base}>
      <TopBar></TopBar>
      <ResultUI></ResultUI>
      <SliderUI 
      your_level="Anxiety disorder"
      level="Sever"
      value={response1}
      />
      <br></br>
      <SliderUI 
       your_level="Bipolar disorder"
       level="Moderate"
       value={response2}
      />
      <br></br>
      <SliderUI 
      your_level="Depressive disorder"
      level="Mild"
      value={response3}
      />
      <br></br>
      <div className={styles.suggestButton}>
      <ButtonUI
      title="HELP LINE"
      subtext= ""
      routeTo="/help"
      bgcolor="#52A1C3"
      />
  
     <ButtonUI
      title="LEARN MORE"
      subtext= ""
      routeTo="/learn_more"
      bgcolor="#52A1C3"
      />
      </div>
      <p>*Result does not represent a real medical diagnosis.</p>
    </div>

  )
}