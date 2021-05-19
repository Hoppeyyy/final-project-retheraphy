
import styles from '../styles/Home.module.css'
import TitleUI from '../comps/Title/index'
import Button from '../comps/Button/index2'
import SuggestionUI from '../comps/Suggestion'
import TopBar from '../comps/TopBar'





export default function () {
  return (
    
    <div>
    <TopBar />
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