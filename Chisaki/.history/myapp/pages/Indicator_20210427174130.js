import TopBar from '../comps/TopBar/index2'
import ButtonUI from '../comps/Button/index2'
import styles from '../styles/Home.module.css'
import Widget from '../comps/Widget/index'
import J_head from '../comps//index'


export default function Indicator() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <div className={styles.containerbox}>
          <J_head 
          title="Symptom indicator" 
          subtitle="Click to check the mental illness symptoms"/>
          <Widget/>
          <div className={styles.buttonBox}>
          <ButtonUI
            title="SEE SUGGESTION"
            subtext= ""
            routeTo="/advise"
            bgcolor="#52A1C3"
            />
            </div>
          </div>
          </div>
    )
  }