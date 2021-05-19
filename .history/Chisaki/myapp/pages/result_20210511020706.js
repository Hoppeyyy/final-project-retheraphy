import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SliderUI from '../comps/Slider/index2'
import TopBar from '../comps/TopBar/index2'
import ResultUI from '../comps/Result'
import ButtonUI from '../comps/Button/index2'
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';


var answers1 = null;
var answers2 = null;
var answers3 = null;
var answers4 = null;
var answers5 = null;
var answers6 = null;




export default function Result() {
  const router = useRouter();

  useEffect(()=>{
    if(process.browser){
      answers1 = sessionStorage.getItem("response");
      answers2 = sessionStorage.getItem("response");
      answers3 = sessionStorage.getItem("response");
      answers4 = sessionStorage.getItem("response");
      answers5 = sessionStorage.getItem("response");
      answers6 = sessionStorage.getItem("response");
      
      console.log(answers1)
      console.log(answers2)
      console.log(answers3)
      console.log(answers4)
      console.log(answers5)
      console.log(answers6)
      }
  },[])
  return (
    <div className={styles.base}>
      <TopBar></TopBar>
      <ResultUI></ResultUI>
      <SliderUI 
      your_level="Anxiety disorder"
      level="Sever"
      />
      <br></br>
      <SliderUI 
       your_level="Bipolar disorder"
       level="Mild"
      />
      <br></br>
      <SliderUI 
      your_level="Depressive disorder"
      level="Mild"
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