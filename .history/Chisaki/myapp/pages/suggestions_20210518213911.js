import TopBar from '../comps/TopBar/index2'
import ButtonUI from '../comps/Button/index2'
import styles from '../styles/Home.module.css'
import Wig from '../comps/Wig/index'
import J_Head from '../comps/J_Head'


export default function Suggestions() {
    return (
          <div className={styles.base}>
            <TopBar/>
          <J_Head 
          title="Suggestions" 
          subhead="The way to treat the mental illness issues"/>
          <Wig/><br></br>
          <div className={styles.buttonBox}>
          <ButtonUI
          title="BACK TO HOME"
          subtext=""
          routeTo='/'
          />
            <ButtonUI
          title="BACK TO LEARN MORE"
          subtext=""
          routeTo='/learn_more'
          />
            </div>
          </div>
    )
  }