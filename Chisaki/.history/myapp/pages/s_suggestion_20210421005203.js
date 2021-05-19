import styles from '../styles/Home.module.css'
import TitleUI from '../comps/Title/index'
import ButtonUI from '../comps/Button/index'





export default function Suggest() {
  return (
    <div>
     <TitleUI title="Suggestion"
     subtitle=""/>
    <div className={styles.containerbox}>
    <img src="Suggestion.png"/>
    </div>
    <ButtonUI title="Learn more"
    routeTo="/help"/>
    </div>
  )
}
