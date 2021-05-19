import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_05() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Plan your goal" 
            title="Suggestion"/>
            <SuggestionInfo
            src="../../suggestions/05.png"
            title="Set realistic goals and expectations"
            content={<div><p>By setting realistic goals and achieving small goals step by step, <span className={styles.span}></span> For example, if you are trying to go on diet, you can start by walking 1 or 2 bus stops distance once or twice a week. When you making a plan, it is a good idea to consider your plan for the long run.</p></div>}
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