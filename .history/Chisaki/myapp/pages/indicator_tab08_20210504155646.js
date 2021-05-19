import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo01 from '../comps/TabInfo01'
import styles from '../styles/Home.module.css'



export default function Indicator_tab08() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Changes in behavior or feeling" 
            title="Symptom Indicator"
            />
            <TabInfo01 
            src="../../logo/08.png"
            content={<div><p>Personality change refers to 
                  <span className={styles.span}>a shift in the way you think, act, or feel.  </span>
                  A sudden, undesired, or uncontrollable change in your personality may be a sign of a serious condition. Personality changes may be 
                  <span className={styles.span}> the result of an interplay of factors, including heredity, environment, and stress. </span></p></div>}
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