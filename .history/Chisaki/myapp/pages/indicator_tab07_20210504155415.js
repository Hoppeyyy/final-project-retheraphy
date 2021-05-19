import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo01 from '../comps/TabInfo01'
import styles from '../styles/Home.module.css'



export default function Indicator_tab07() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Sleep problems" 
            title="Symptom Indicator"
            />
            <TabInfo01 
            src="../../logo/07.png"
            content={<div><p>Sleeping issues can have unpleasant effects on your work, social, and family life. It can be <span className={styles.span}>a sign of an impending condition such as bipolar disorder. </span> In addition to affecting sleep itself, many medical and mental health conditions can be worsened by sleeping issues.</p></div>}
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