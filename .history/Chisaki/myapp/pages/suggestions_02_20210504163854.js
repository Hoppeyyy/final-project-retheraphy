import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index'
import SuggestionInfo_2 from '../comps/SuggestionInfo_2/index'
import styles from '../styles/Home.module.css'



export default function Suggestion_02() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead Sub="Stretching" title="Suggestion"/>
            <SuggestionInfo_2 src="../../suggestions/02.png"
            title="Exercise regularly"
            text="You can try "
            text2="Try to do some exercises because we can ease our stress by moving our body. "
            tex3="non-competitive exercises, "
            text4="such as aerobics, weight training, and yoga. According to the study, aerobic exercise can release endorphins which are natural substances that make your feeling better and keep you being positive."/>
          <ButtonUI/>
          </div>
          </div>
    )
  }