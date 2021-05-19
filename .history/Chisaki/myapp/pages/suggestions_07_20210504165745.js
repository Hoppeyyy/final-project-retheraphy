import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_07() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead Sub="Determine priorities" title="Suggestion"/>
            <SuggestionInfo 
            src="../../suggestions/07.png"
            title="Managing and controlling your priorities"
            content={<div><p>You may reduce the impact of your mental illness by managing time and energy. Cut back on obligations when necessary and set reasonable goals. Give yourself permission to do less when symptoms are worse. You may find it helpful to make a list of daily tasks or use a planner to structure your time and stay organized.</p></div>}
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