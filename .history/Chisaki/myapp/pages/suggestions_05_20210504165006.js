import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_05() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead Sub="Chatting" title="Suggestion"/>
            <SuggestionInfo
            src="../../suggestions/05.png"
            title="Talk how you feel to someone"
            content={<div><p></p></div>}
            />
              <div className={styles.buttonBox}>
          <ButtonUI/>
          </div>
          </div>
    )
  }