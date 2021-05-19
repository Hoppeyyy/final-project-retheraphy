import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo01 from '../comps/TabInfo01/index'
import styles from '../styles/Home.module.css'



export default function Indicator_tab01() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Feeling Anxious or Worried" 
            title="Symptom Indicator"
            />
            <TabInfo01 
            src="../../logo/01.png"
            content={<div><p>Anxiety and panic interfere with daily activities, are difficult to control, are out of proportion to the actual danger and can last a long time. <span className={styles.span}>Symptoms may start during childhood or the teen years</span> and continue into adulthood.</p></div>}
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