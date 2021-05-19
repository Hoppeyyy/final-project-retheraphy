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
            text="Did you know smoking is not only bad for your physical health, but also mental health? "
            text2="Smoking increases your anxiety and tension. "
            tex3="In fact, if you try to stop smoking and get rid of the nicotine, you would feel irritable and anxious due to the signals from certain chemicals in the brain."
            />
          <ButtonUI/>
          </div>
          </div>
    )
  }