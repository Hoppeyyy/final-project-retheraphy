import HeadingUI from '../comps/Heading'
import TopBar from '../comps/TopBar'
import styles from '../styles/Home.module.css'
import Heading from '../comps/Heading'
import Intro from '../comps/Content'
import PsNoteUI from '../comps/PsNote'

export default function Intro() {
    return (
      <div className={styles.container}>
          <TopBar />
        <HeadingUI />
        <IntroContUI />
        <IntroContUI />
        <IntroContUI />
        <PsNoteUI />
      </div>
    )
  }