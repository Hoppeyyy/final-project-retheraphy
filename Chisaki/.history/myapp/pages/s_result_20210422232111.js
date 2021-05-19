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
    src="apps_pic/result.jpg" 
    title="Get the result" 
    subtext="Get the result of your mental illness level"
    routeTo="/instruction"
    Pstyle= "After taking the 6 questions, the app will show you the result of your mental illness level with 3 types which are Anxiety disorder, Bipolator disorder, and Major "
    visivility="hidden"
    />

    </div>
    <div className={styles.buttonBox}>
    <Button 
    title="See Sugestion"
    subtext=""
    routeTo="/instruction"/>
    </div>
    </div>
  )
}