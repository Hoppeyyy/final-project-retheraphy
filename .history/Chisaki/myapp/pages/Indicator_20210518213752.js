import TopBar from '../comps/TopBar/index2'
import ButtonUI from '../comps/Button/index2'
import styles from '../styles/Home.module.css'
import Widget from '../comps/Widget/index'
import J_Head from '../comps/J_head'


export default function Indicator() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <J_Head 
          title="Symptom indicator" 
          subhead="Click to check the mental illness symptoms"/>
          <Widget/><br></br>
          <div className={styles.buttonBox}>
          <ButtonUI
            title="SEE SUGGESTION"
            subtext= ""
            routeTo="/suggestions"
           
            />
            </div>
          </div>
    )
  }