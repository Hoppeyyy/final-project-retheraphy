import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index'
import SuggestionInfo_5 from '../comps/SuggestionInfo_5/index'
import styles from '../styles/Home.module.css'



export default function Suggestion_06() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <div className={styles.containerbox}>
            <Tabhead Sub="Plan your goal" title="Suggestion"/>
            <SuggestionInfo_5 src="../../suggestions/06.png"
            title="Set realistic goals and expectations"
            text="By setting realistic goals and achieving small goals step by step, "
            text2="you can get more and more confident on yourself. "
            text3="For example, if you are trying to go on diet, you can start by walking 1 or 2 bus stops distance once or twice a week. When you making a plan, "
            text4="it is a good idea to consider your plan for the long run."
            />
          <ButtonUI/>
          </div>
          </div>
    )
  }