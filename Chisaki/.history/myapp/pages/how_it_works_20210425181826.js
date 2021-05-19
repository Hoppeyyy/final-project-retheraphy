import TopBar from '../comps/TopBar/index2'
import styles from '../styles/Home.module.css'
import J_Head from '../comps/J_Head'
import ButtonUI from '../comps/Button/index2.js'
import HowToUI from '../comps/HowTo'


export default function Terms() {
    return (
      <div className={styles.base}>
        <TopBar />
        <J_Head
        title="How it works"
        subhead="" 
        />
        <HowToUI
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