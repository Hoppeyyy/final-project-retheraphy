import HeadingUI from '../comps/Heading'
import TopBar from '../comps/TopBar'
import styles from '../styles/Home.module.css'
import Heading from '../comps/Heading'
import ContentUI from '../comps/Content'
import PsNoteUI from '../comps/PsNote'
import  ButtonUI from '../comps/Button/index2.js'


export default function Intro() {
    return (
      <div className={styles.container}>
          <TopBar />
        <HeadingUI 
        title="About Retheraph"
        subhead="Brief of the app"/>
        <ContentUI />
        <ContentUI />
        <ContentUI />
        <PsNoteUI />
        <ButtonUI 
        title="NEXT"
        subtext=""
        routeTo='/terms'/>
      </div>
    )
  }
