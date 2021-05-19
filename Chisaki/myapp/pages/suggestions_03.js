import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_03() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Stop smoking" 
            title="Suggestion"
            />
            <SuggestionInfo 
            src="../../suggestions/03.png"
            title="Stop smoking"
            content={<div><p>Did you know smoking is not only degrading your physical body but also your mental status? Unlike most everyone would believe, <span className={styles.span}>Smoking amplifies your anxiety and tension.</span> If you get rid of the nicotine by stop smoking, The neural of your brain will send a signal by generating chemical substances that would make you feel irritated and tense.</p></div>}
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
