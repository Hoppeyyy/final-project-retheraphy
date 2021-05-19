import HelpBoxUI from '../comps/HelpBox/index2.js'
import TopBar from '../comps/TopBar/index2'
import styles from '../styles/Home.module.css'
import PsNoteUI from '../comps/PsNote'
import ButtonUI from '../comps/Button/index2.js'

export default function Terms() {
    return (
      <div className={styles.base}>
          <TopBar />
          <Re
        <HelpBoxUI 
        number="1"
        title="Call a helpline"
        content="All the helplines listed below have trained professionals:
        +Kids Helpline 1800 55 1800 24/7
        +Lifeline 13 11 14
        +eheadspace 1800 650 890"/>
        <HelpBoxUI 
        number="2"
        title="Head to Headspace"
        content="Headspace centres offer a drop-in service. Call them beforehand to check.
        You can also schedule an appointment by calling or emailing them. "/>
        <HelpBoxUI 
        number="3"
        title="Connect with ReachOut legends"
        content=" Regardless of where you are on your journey, you can always find additional support, advice or just some willing listeners on the ReachOut forums."/>
        <PsNoteUI />
        <ButtonUI 
        title="Home"
        subtext=""
        routeTo='/home'/>
      </div>
      
    )
  }
