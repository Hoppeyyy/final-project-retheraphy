import TopBar from '../comps/TopBar/index2'
import ButtonUI from '../comps/Button/index2'
import styles from '../styles/Home.module.css'
import Wig from '../comps/Wig/index'
import TitleUI from '../comps/Title/index'


export default function Indicator() {
    return (
          <div className={styles.base}>
            <TopBar/>
          <J_head 
          title="Symptom indicator" 
          subhead="Click to check the mental illness symptoms"/>
          <Widget/><br></br>
          <TopBar/>
          <div className={styles.containerbox}>
          <TitleUI title="Suggestions" subtitle="The way to treat the mental illness issues"/>
          <Wig/>
          <ButtonUI/>
          </div>
          </div>
    )
  }