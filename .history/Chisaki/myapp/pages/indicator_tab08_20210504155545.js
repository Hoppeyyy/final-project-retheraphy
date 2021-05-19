import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo08 from '../comps/TabInfo08/index'
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