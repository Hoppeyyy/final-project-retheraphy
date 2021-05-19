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
            src="../../suggestions/01.png"
            title="Eat and drink to optimize your health"
            content={<div>}
            />
            <div className={styles.buttonBox}>
            <ButtonUI
            title="BACK"
            subtext= ""
            routeTo="/suggestions"
            bgcolor="#52A1C3"
            />
          </div>
          </div>
    )
  }