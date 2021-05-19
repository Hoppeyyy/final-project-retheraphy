import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo01 from '../comps/TabInfo01'
import styles from '../styles/Home.module.css'



export default function Indicator_tab06() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Emotional outbursts" 
            title="Symptom Indicator"
            />
            <TabInfo01 
            src="../../logo/06.png"
            content={<div><p>Explosive eruptions occur suddenly, with little or no warning, and usually last for a short time. This may occur frequently. Less severe verbal outbursts may occur in between episodes of physical aggression. You may be<span className={styles.span}> irritable, impulsive, aggressive, or chronically angry most of the time.</span></p></div>}
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