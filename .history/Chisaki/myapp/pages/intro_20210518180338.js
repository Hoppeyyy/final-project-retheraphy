import TopBar from '../comps/TopBar/index2'
import styles from '../styles/Home.module.css'
import J_Head from '../comps/J_Head'
import J_Content from '../comps/J_Content'
import PsNoteUI from '../comps/PsNote'
import ButtonUI from '../comps/Button/index2'
import ImgBoxUI from '../comps/ImgBox/index2'
import {useRouter} from 'next/router'
import React from 'react'


export default function Intro() {
    return (
      <div className={styles.base}>
          <TopBar />
        <J_Head
        title="About Us"
        subhead="What is RETHERAPHY?" />
        <J_Content
        content="Retheraphy comes from the word therapist. Our goal is to be your therapist that shows the potential illnesses you may have and improve your mental health."
        />
        <J_Content 
        content="Mental health is a common issue all over the world. We may easily ignore our mental health conditions because of our busy lifestyle."
        />
        <J_Content 
        content="Our small-scale test helps you to check your mental health condition. We analyze and evaluate your answers from the test you take and show your percentages of the chance to having the top 3 mental illnesses."
        />
        <div className={styles.psnotebox}>
        <PsNoteUI />
        </div>
        <div className={styles.learn_imgbutton}>
        <ImgBoxUI 
        src="/apps_pic/img_intro.png"
        width="208px"
        height="141px"
        />
        <ButtonUI 
        title="NEXT"
        subtext=""
        routeTo="/how_it_works"
        
        />
        </div>
      </div>
    )
  }
