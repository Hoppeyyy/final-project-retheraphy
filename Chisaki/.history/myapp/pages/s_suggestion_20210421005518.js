import styles from '../styles/Home.module.css'
import ButtonUI from '../comps/Button/index'
import TopBar from '../comps/TopBar/index2'
import J_Head from '../'





export default function Suggest() {
  return (
    <div>
     <TopBar 
     title="Suggestion"
     subtitle=""/>
     <J_Head
    title="How it works"
    subhead="Whole testing process"
    />
    <div className={styles.containerbox}>
    <img src="Suggestion.png"/>
    </div>
    <ButtonUI 
    title="Learn more"
    routeTo="/question1"/>
    </div>
  )
}
