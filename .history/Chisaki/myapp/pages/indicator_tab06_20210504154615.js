import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo06 from '../comps/TabInfo06/index'
import styles from '../styles/Home.module.css'



export default function Indicator_tab06() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Emotional outbursts" 
            title="Symptom Indicator"
            />
            <TabInfo06 
            src="../../logo/06.png"
            content={<div></div>}
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