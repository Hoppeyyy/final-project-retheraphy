
import styles from '../styles/Home.module.css'
import TitleUI from '../comps/Title/index'
import Button from '../comps/Button/index2'
import SuggestionUI from '../comps/Suggestion'
import TopBar from '../comps/TopBar'





export default function Advise() {
  return (
    
    <div>
    <TopBar />
    <J_head 
          title="Symptom indicator" 
          subhead="Click to check the mental illness symptoms"/>
          <Widget/><br></br>
     <TitleUI 
     title="Suggestion"
     subtitle=""/>
    <div className={styles.containerbox}>
    <SuggestionUI/>
    </div>
    <br></br>
    <div className={styles.buttonBox}>
    <Button 
    title="Learn More"
    subtext=""
    routeTo="/help"/>
    </div>
    </div>
  )
}