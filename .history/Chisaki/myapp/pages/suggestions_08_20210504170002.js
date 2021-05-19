import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_08() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Adopt positive attitude" 
            title="Suggestion"/>
            <SuggestionInfo
            src="../../suggestions/08.png"
            title="Learn to adopt a positive attitude"
            con
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