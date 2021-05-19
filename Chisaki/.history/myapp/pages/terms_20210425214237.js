import TopBar from '../comps/TopBar/index2'
import styles from '../styles/Home.module.css'
import J_Head from '../comps/J_Head'
import BorderUI from '../comps/Border'
import PsNoteUI from '../comps/PsNote'
import ButtonUI from '../comps/Button/index2.js'
import ImgBoxUI from '../comps/ImgBox/index2'


export default function Terms() {
    return (
      <div className={styles.base}>
        <TopBar />
      <div className={styles.termsrow}>
        <J_Head
        title="Before the test"
        subhead="Terms of reference" 
        />
        <div className={}></div>
        <ImgBoxUI 
        src="apps_pic/terms.jpg"
        width="130px"
        height="90px"
        className={styles.termsimg}
        />
        </div>
        <BorderUI/>
        <br></br>
        <br></br>
        <div className={styles.buttonBox}>
        <ButtonUI
        title="BACK"
        subtext=""
        routeTo="/how_it_works"
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