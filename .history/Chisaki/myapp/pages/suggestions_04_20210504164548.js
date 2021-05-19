import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo_4 from '../comps/SuggestionInfo_4/index'
import styles from '../styles/Home.module.css'



export default function Suggestion_04() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <div className={styles.containerbox}>
            <Tabhead Sub="Self-care" title="Suggestion"/>
            <SuggestionInfo_4 src="../../suggestions/04.png"
            title="Practice relaxation techniques"
            text="Finding your relaxation way is really important to relieve your stress. "
            text2="It can be anything that you would like to do, such as taking a long bath, deep breathing, doing mindfulness meditation, or daydreaming."
            />
          <ButtonUI/>
          </div>
          </div>
    )
  }