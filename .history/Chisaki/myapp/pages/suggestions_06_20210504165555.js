import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_06() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Chatting" 
            title="Suggestion"/>
            <SuggestionInfo 
            src="../../suggestions/06.png"
            title="Talk how you feel to someone"
            content={<div><p>By talking your concerns to someone else, you can organize your feeling. Moreover, someone may give you some advice for your concerns. <span className={styles.span}>It is always a good idea to talk your feelings to people you trust. </span>If your concerns are really personal ones, you can also reach out to some professional consultants.</p></div>}
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