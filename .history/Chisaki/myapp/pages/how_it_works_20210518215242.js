import TopBar from '../comps/TopBar/index2'
import styles from '../styles/Home.module.css'
import J_Head from '../comps/J_Head'
import ButtonUI from '../comps/Button/index2.js'
import HowToUI from '../comps/HowTo'
import {useRouter} from 'next/router';
import React from 'react'


export default function HowTo() {
  const router = useRouter();
    return (
      <div className={styles.base}>
        <TopBar />
        <J_Head
        title="Welcome to RATHERAPHY"
        subhead={<div className={styles.clickinstBox}><p>Check out the summary of different section</p><img src="/icons/icon.png" className={styles.clickbtn}/></div>}
        />
        <HowToUI 
        title="MENTAL TEST"
        subtext="Complete the 6 questions test"
        routeTo='/s_test'
        src="/apps_pic/test.jpg"
        />
        <HowToUI 
        title="TEST RESULT"
        subtext="Result based on 3 mental illnesses"
        routeTo='/s_result'
        src="/apps_pic/result.jpg"
        />
        <HowToUI 
        title="LEARN MORE"
        subtext="Physical and mental symptoms"
        routeTo='/s_understand'
        src="/apps_pic/img_learn.png"
        />
        <HowToUI 
         title="SUGGESTIONS"
        subtext="Ways to improve mental health"
         routeTo='/s_suggestion'
         src="/apps_pic/suggestion.png"
        />
        <br></br>
        <div className={styles.buttonBox}>
        <ButtonUI
        title="BACK"
        subtext=""
        routeTo="/intro"
     
        />
        <ButtonUI
        title="TAKE TEST"
        subtext=""
        routeTo="/terms"
       
        />
        </div>
      </div>
    )
  }