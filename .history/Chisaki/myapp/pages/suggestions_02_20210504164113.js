import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_02() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Stretching" 
            title="Suggestion"
            />
            <SuggestionInfo 
            src="../../suggestions/02.png"
            title="Exercise regularly"
            content={<div><p><span className={styles.span}>Try to do some exercises because we can ease our stress by moving our body. <span></span>You can try non-competitive exercises, such as aerobics, weight training, and yoga. According to the study, aerobic exercise can release endorphins which are natural substances that make your feeling better and keep you being positive.</p></div>}
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