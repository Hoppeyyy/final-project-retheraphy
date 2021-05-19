import styles from '../styles/Home.module.css'
import Button from '../comps/Button/index2'
import TopBar from '../comps/TopBar/index2'
import J_Head from '../comps/J_Head'
import EnlargedUI from '../comps/Enlarged'





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
    <EnlargedUI 
    src="apps_pic/.png" 
    title="Take Our Suggestion" 
    subtext=""
    routeTo="/suggestion"
    Pstyle= "Based on the level of your mental illness level, we will provide some suggestions that you can try to make you happy. Our suggestions are all based on the study. If you want to check our suggestions before you take quizzes, you can check them by clicking See Suggestion Button."
    visivility="visible"
    />

    </div>
    <div className={styles.buttonBox}>
    <Button 
    title="BACK"
    subtext=""
    routeTo="/instruction"/>
      <Button 
    title="See Sugestion"
    subtext=""
    routeTo="/advise"
    />
    </div>
    </div>
  )
}
