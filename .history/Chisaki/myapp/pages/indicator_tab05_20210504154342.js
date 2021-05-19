import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo01 from '../comps/TabInfo01'
import styles from '../styles/Home.module.css'



export default function Indicator_tab05() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Substance abuse" 
            title="Symptom Indicator"
            />
            <TabInfo01 
            src="../../logo/05.png"
            content={}
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