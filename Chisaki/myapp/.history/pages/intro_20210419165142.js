import HeadingUI from '../comps/Heading'
import TopBar from '../comps/TopBar'
import styles from '../styles/Home.module.css'
import Heading from '../comps/Heading'
import IntroContUI from '../comps/IntroCont'
import PsNoteUI from '../comps/PsNote'
import Intro_headingUI from '../comps/Intro_heading'

export default function Intro() {
    return (
      <div className={styles.container}>
          <TopBar />
        <Intro_headingUI />
        <IntroContUI />
        <IntroContUI />
        <IntroContUI />
        <PsNoteUI />
      </div>
    )
  }