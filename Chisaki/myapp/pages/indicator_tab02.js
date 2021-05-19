import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo01 from '../comps/TabInfo01/index'
import styles from '../styles/Home.module.css'



export default function Indicator_tab02() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Feeling guilty or worthless" 
            title="Symptom Indicator"/>
            <TabInfo01 
            src="../../logo/02.png"
            content={<div><p>Mood disorders such as depression are often marked by symptoms such as<span className={styles.span}> shame, guilt, hopelessness, and worthlessness. </span>Such symptoms create distress and make it difficult to manage usual daily tasks.</p></div>}
            />
            <div className={styles.buttonBox}>
            <ButtonUI
            title="BACK"
            subtext= ""
            routeTo="/indicator"
          
            />
          </div>
          </div>
    )
  }