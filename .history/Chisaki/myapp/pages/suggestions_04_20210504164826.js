import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo from '../comps/SuggestionInfo'
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
            content={<div><p><span className={styles.span}>Finding your relaxation way is really important to relieve your stress. </span>It can be anything that you would like to do, such as taking a long bath, deep breathing, doing mindfulness meditation, or daydreaming.</p></div>}
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