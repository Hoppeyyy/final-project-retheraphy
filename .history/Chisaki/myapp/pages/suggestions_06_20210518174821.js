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
            title="Speak out your feeling to someone"
            content={<div><p>By talking your concerns to someone else, you could organize your feeling. Moreover, the person you communicate with may give you some advice to resolve your problems. <span className={styles.span}>It is always a good idea to speak out your senses to the people you trust. </span>If your concerns are private, you can also reach out to professional consultants.</p></div>}
            />
            <div className={styles.buttonBox}>
          <ButtonUI
            title="BACK"
            subtext= ""
            routeTo="/suggestions"
          />
          </div>
          </div>
    )
  }
