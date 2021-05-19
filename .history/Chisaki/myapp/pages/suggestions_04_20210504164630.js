import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo_4 from '../comps/SuggestionInfo_4/index'
import styles from '../styles/Home.module.css'



export default function Suggestion_04() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Self-care" 
            title="Suggestion"
            />
            <SuggestionInfo
            src="../../suggestions/04.png"
            title="Practice relaxation techniques"
            content={}
            />
            <div className={styles.buttonBox}>
          <ButtonUI
          
          />
          </div>
          </div>
    )
  }