import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_07() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <div className={styles.containerbox}>
            <Tabhead Sub="Determine priorities" title="Suggestion"/>
            <SuggestionInfo 
            src="../../suggestions/07.png"
            title="Managing and controlling your priorities"
            
            />
          <ButtonUI/>
          </div>
          </div>
    )
  }