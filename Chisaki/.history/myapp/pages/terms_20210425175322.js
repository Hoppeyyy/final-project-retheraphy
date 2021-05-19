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
        <BorderUI
        content="Psychological tests are formalized measures of mental functioning. Most are objective and quantifiable; 
        however, certain projective tests may involve some level of subjective interpretation. Also known as inventories, measurements, questionnaires, and scales, psychological tests are administered in a variety of settings, including preschools, primary and secondary schools, colleges and universities, hospitals, outpatient healthcare settings, and social agencies. 
        They come in a variety of formats, including written, verbal, and computer administered.
        
        "/>
        <br></br>
        <div className={styles.buttonBox}>
        <ButtonUI
        title="BACK"
        subtext=""
        routeTo="/instruction"
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