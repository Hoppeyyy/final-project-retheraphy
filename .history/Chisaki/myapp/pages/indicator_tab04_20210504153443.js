import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo01 from '../comps/TabInfo01'
import styles from '../styles/Home.module.css'



export default function Indicator_tab04() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Quiet or withdrawn" 
            title="Symptom Indicator"
            />
            <TabInfo01 
            src="../../logo/04.png"
            content={<div><p><span className={styles.span}>Avoiding work, social, or school activities</span> for fear of criticism or rejection. Also, you may frequently<span className={styles.span}> feel unwelcome </span> in social situations. This is because people with avoidant personality disorder have a low threshold for criticism and often imagine themselves to be inferior to others.</p></div>}
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