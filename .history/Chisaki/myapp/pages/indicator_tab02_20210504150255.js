import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo02 from '../comps/TabInfo02/index'
import styles from '../styles/Home.module.css'



export default function Indicator_tab02() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead Sub="Feeling guilty or worthless" title="Symptom Indicator"/>
            <TabInfo02 src="../../logo/02.png"/>
            <ButtonUI
    title="BACK"
    subtext= ""
    routeTo="/indicator"
    bgcolor="#52A1C3"
    />
          </div>
    )
  }