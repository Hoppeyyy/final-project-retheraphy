import TopBar from '../comps/TopBar/index2'
import styles from '../styles/Home.module.css'
import J_Head from '../comps/J_Head'
import ButtonUI from '../comps/Button/index2.js'
import HowToUI from '../comps/HowTo'
import {useRouter} from 'next/router';


export default function HowTo() {
    return (
      <div className={styles.base}>
        <TopBar />
        <J_Head
        title="How it works"
        subhead="" 
        />
        <HowToUI 
        title="Take the test"
        subtext="Complete the 6 Questions test"
        routeTo='/s_test.js'
        src="/apps_pic/test.jpg"
        />
        <HowToUI 
        title="Get the result"
        subtext="Get the result base on the mental test"
        routeTo='/s_result.js'
        src="/apps_pic/result.jpg"
        />
        <HowToUI 
        title="Understand mental illness"
        subtext="Learn about the physical and mental symptoms "
        routeTo='/s_understand.js'
        src="/apps_pic/img_learn.png"
        />
        <HowToUI 
         title="Get suggestions"
         subtext="See suggestions for treating the mental illnesses"
         routeTo='/s_suggestion.js'
         src="/apps_pic/suggestion.png"
        />
        <br></br>
        <br></br>
        <div className={styles.buttonBox}>
        <ButtonUI
        title="BACK"
        subtext=""
        routeTo="/introduction"
        bgcolor="#52A1C3"
        />
        <ButtonUI
        title="TAKE TEST"
        subtext=""
        routeTo="/terms"
        bgcolor="#52A1C3"
        />
        </div>
      </div>
    )
  }