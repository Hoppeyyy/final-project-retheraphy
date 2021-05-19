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
            <SuggestionInfo src="../../suggestions/07.png"
            title="Managing and controlling your priorities"
            text="You may reduce the impact of your mental illness by managing time and energy. Cut back on obligations when necessary and set reasonable goals. "
            text2="Give yourself permission to do less when symptoms are worse. "
            text3="You may find it helpful to make a list of daily tasks or use a planner to structure your time and stay organized."
            />
          <ButtonUI/>
          </div>
          </div>
    )
  }