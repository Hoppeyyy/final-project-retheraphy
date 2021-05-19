import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_03() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Stop smoking" 
            title="Suggestion"
            />
            <SuggestionInfo 
            src="../../suggestions/03.png"
            title="Stop smoking"
            
            />
            
          <ButtonUI/>
          </div>
          </div>
    )
  }