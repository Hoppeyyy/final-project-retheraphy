import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_01() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Eat Well" 
            title="Suggestion"/>
            <SuggestionInfo 
            src="../../suggestions/01_01.png"
            title="Dieting to optimize your health"
            content={<div><p>Having a balanced eating habit is suitable for your physical health and your mental health. Mentally disturbed persons often release their stress by consuming junk foods, taking caffeine, or drinking alcohol, but this is not the proper way of easing your mental state. <span className={styles.span}>Maintain a healthy diet it’s vital to your mental health as well as your physical health.</span></p></div>}
            />
            <div className={styles.buttonBox}>
            <ButtonUI
            title="BACK"
            subtext= ""
            routeTo="/suggestions"
            />
          </div>
          </div>
    )
  } 
