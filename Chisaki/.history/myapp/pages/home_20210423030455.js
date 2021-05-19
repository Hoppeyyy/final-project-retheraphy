import HomeUI from '../comps/Home'
import  ButtonUI from '../comps/Button/index2.js'
import SubtextUI from '../comps/Subtext'
import styles from '../styles/Home.module.css'


export default function Home() {
    return (
       <div className={styles.home}>
          <HomeUI>
        </HomeUI>
        <SubtextUI
            text="Test your mental condition and Take care your mental health"
        />
        <div>
        <ButtonUI 
        title="Start"
        subtext=""
        routeTo='/intro'/>
       
       </div>
    )
  }