import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index'
import SuggestionInfo_3 from '../comps/SuggestionInfo_3/index'
import styles from '../styles/Home.module.css'



export default function Suggestion_05() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <div className={styles.containerbox}>
            <Tabhead Sub="Chatting" title="Suggestion"/>
            <SuggestionInfo_3 src="../../suggestions/05.png"
            title="Talk how you feel to someone"
            text="By talking your concerns to someone else, you can organize your feeling. Moreover, someone may give you some advice for your concerns. "
            text2="It is always a good idea to talk your feelings to people you trust. "
            text3="If your concerns are really personal ones, you can also reach out to some professional consultants."
            />
          <ButtonUI/>
          </div>
          </div>
    )
  }