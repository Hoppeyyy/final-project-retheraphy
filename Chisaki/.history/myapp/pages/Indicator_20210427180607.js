import TopBar from '../comps/TopBar/index2'
import ButtonUI from '../comps/Button/index2'
import styles from '../styles/Home.module.css'
import Widget from '../comps/Widget/index'
import J_head from '../comps/J_head'


export default function Indicator() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <J_head 
          title="Symptom indicator" 
          subhead="Click to check the mental illness symptoms"/>
          <Widget/><br></br>
          <div className={styles.buttonBox}>
          <ButtonUI
            title="SEE SUGGESTION"
            subtext= ""
            routeTo="/advise"
            bgcolor="#52A1C3"
            />
            </div>
          </div>
    )
  }