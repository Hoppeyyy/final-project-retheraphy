import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo01 from '../comps/TabInfo01/index'
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
            contnet={<div><p>Depression is a common medical illness that negatively affects how you feel, the way you think, and how you act.Depression causes feelings of sadness and/or a loss of interest in activities you once enjoyed. It can lead to a variety of emotional and physical problems.</p></div>}
            />
            <div className={styles.buttonBox}>
            <ButtonUI
            title="BACK"
            subtext= ""
            routeTo="/Indicator"
            bgcolor="#52A1C3"
            />
          </div>
          </div>
    )
  }