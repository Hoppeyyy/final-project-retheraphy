import styles from '../styles/Home.module.css'
import Button from '../comps/Button/index2'
import TopBar from '../comps/TopBar/index2'
import J_Head from '../comps/J_Head'





export default function Suggest() {
  return (
    <div>
     <TopBar 
     title="Suggestion"
     subtitle=""/>
     <J_Head
    title="How it works"
    subhead="Take our suggestion"
    />
    <div className={styles.containerbox}>
    <img src="apps_pic/img_learn.png" />

    </div>
    <Button 
    title="See Sugestion"
    sub
    routeTo="/instruction"/>
    </div>
  )
}
