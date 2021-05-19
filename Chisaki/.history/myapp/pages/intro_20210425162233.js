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
          <TopBar />
        <J_Head
        title="About Us"
        subhead="What is RETHERAPH?" />
        <J_Content/>
        <J_Content />
        <J_Content />
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
    )
  }
