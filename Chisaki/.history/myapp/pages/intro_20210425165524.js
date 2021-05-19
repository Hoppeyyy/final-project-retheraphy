import HeadingUI from '../comps/Heading'
import TopBar from '../comps/TopBar/index2'
import styles from '../styles/Home.module.css'
import J_Head from '../comps/J_Head'
import J_Content from '../comps/J_Content'
import PsNoteUI from '../comps/PsNote'
import  ButtonUI from '../comps/Button/index2.js'
import ImgBox from '../comps/ImgBox'


export default function Intro() {
    return (
      <div className={styles.Base}>
          <TopBar />
        <J_Head
        title="About Us"
        subhead="What is RETHERAPH?" />
        <J_Content
        content="Retheraph comes from the word therapist, our goal is to be your therapist that shows your potential illnesses you may have."
        />
        <J_Content 
        content="Mental health is a common issue all over the world. people may easily ignore their mental health status because of their busy work life."
        />
        <J_Content 
        content="Our main goal is to help people to check their mental issues, keep tracking their emotion/feeling every day. Also, the app helps people to know the way to stay healthy mentally."
        />
        <PsNoteUI />
        <div className={styles.learn_imgbutton}>
        <ImgBox />
        <ButtonUI 
        title="NEXT"
        subtext=""
        routeTo="/terms"
        bgcolor="#52A1C3"
        />
        </div>
      </div>
    )
  }
