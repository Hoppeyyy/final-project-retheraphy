import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo01 from '../comps/TabInfo01'
import styles from '../styles/Home.module.css'



export default function Indicator_tab03() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Feeling depresseed or unhappy" 
            title="Symptom Indicator"
            />
            <TabInfo01 
            src="../../logo/03.png"
            content={<div><p> Depression is a common medical illness that <span className={styles.span}>negatively affects how you feel, the way you think, and how you act. </span> Depression causes feelings of <span className={styles.span}> sadness and/or a loss of interest </span>
                  in activities you once enjoyed. It can lead to a variety of emotional and physical problems.</p></div>}
            />
            <div className={styles.buttonBox}>
            <ButtonUI
            title="BACK"
            subtext= ""
            routeTo="/indicator"
            bgcolor="#52A1C3"
            />
          </div>
          </div>
    )
  }