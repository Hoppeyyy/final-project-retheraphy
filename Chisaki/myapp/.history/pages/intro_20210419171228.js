import HeadingUI from '../comps/Heading'
import TopBar from '../comps/TopBar'
import styles from '../styles/Home.module.css'
import IntroContUI from '../comps/IntroCont/index2'
import PsNoteUI from '../comps/PsNote'
import Intro_headingUI from '../comps/Intro_heading/index2'

export default function Intro() {
    return (
      <div className={styles.container}>
          <TopBar />
        <Intro_headingUI 
        title="About Retheraph"
        subtext="Brief of the app"
        />
        <IntroContUI 
        content="Retheraph is come from theraphist, our goal is to make our app be like your therphist that show the potential illness you may have."
        />
        <IntroContUI />
        <IntroContUI />
        <PsNoteUI />
      </div>
    )
  }