import TopBar from '../comps/TopBar/index2'
import styles from '../styles/Home.module.css'
import J_Head from '../comps/J_Head'
import BorderUI from '../comps/Border'
import PsNoteUI from '../comps/PsNote'
import ButtonUI from '../comps/Button/index2.js'
import ImgBoxUI from '../comps/ImgBox'


export default function Terms() {
    return (
      <div className={styles.base}>
        <TopBar />
        <J_Head
        title="Before the test"
        subhead="Terms of reference" 
        />
        <BorderUI/>
        <br></br>
        <br></br>
        <div className={styles.buttonBox}>
        <ButtonUI
        title="BACK"
        subtext=""
        routeTo="/how_itworks"
        bgcolor="#52A1C3"
        />
        <ButtonUI
        title="AGREE"
        subtext=""
        routeTo="/instruction"
        bgcolor="#52A1C3"
        />
        </div>
      </div>
    )
  }