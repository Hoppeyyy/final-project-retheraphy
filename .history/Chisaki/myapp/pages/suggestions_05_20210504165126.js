import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_05() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Plan your goal" 
            title="Suggestion"/>
            <SuggestionInfo
            src="../../suggestions/05.png"
            title="Set realistic goals and expectations"
            content={<div><p></p></div>}
            />
              <div className={styles.buttonBox}>
          <ButtonUI/>
          </div>
          </div>
    )
  }