import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo07 from '../comps/TabInfo07/index'
import styles from '../styles/Home.module.css'



export default function Indicator_tab07() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Sleep problems" 
            title="Symptom Indicator"
            />
            <TabInfo07 
            src="../../logo/07.png"
            />
            
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