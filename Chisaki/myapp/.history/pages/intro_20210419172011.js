import HeadingUI from '../comps/Heading'
import TopBar from '../comps/TopBar'
import styles from '../styles/Home.module.css'
import IntroContUI from '../comps/IntroCont/index2'
import PsNoteUI from '../comps/PsNote'
import Intro_headingUI from '../comps/Intro_heading/index2'
import ImgBoxUI from '../comps/ImgBox'

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
        <IntroContUI 
        content="Mental health is always an issue across different country, people may easily ignore their mental health due to busy work life."
        />
        <IntroContUI 
        content="Our main goal is to help people to record their mental issues , keep tracking their emotion/feeling everyday. Also, educate people to build a good mental health."
        />
        <PsNoteUI />
        <ImgBoxUI /
      </div>
    )
  }