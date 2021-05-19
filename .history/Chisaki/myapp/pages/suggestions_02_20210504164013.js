import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_02() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Stretching" 
            title="Suggestion"
            />
            <SuggestionInfo 
            src="../../suggestions/02.png"
            title="Exercise regularly"
            content={<div></div>}
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