import styles from '../styles/Home.module.css'
import Button from '../comps/Button/index2'
import TopBar from '../comps/TopBar/index2'
import J_Head from '../comps/J_Head'
import EnlargedUI from '../comps/Enlarged'





export default function Suggest() {
  return (
    <div className={styles.base}>
     <TopBar />
     <J_Head
    title="Take the test"
    subhead="Complete the 6 questions test"
    />
    <div className={styles.containerbox}>
    <EnlargedUI 
    src="apps_pic/test.jpg" 
    title="" 
    subtext=""
    routeTo="/instruction"
    Pstyle= "There are a total of 6 questions in the app to scale your mental illness level. Based on your answers, the app will show you the percentage of the possibility of having mental illnesses, specifically Anxiety disorder, Bipolar disorder, and Major depression disorder"
    />
    </div>
    <div className={styles.buttonBox}>
    <Button 
    title="BACK"
    subtext=""
    routeTo="/instruction"
    bgcolor=""
    />
     <Button 
    title="TAKE TEST"
    subtext=""
    routeTo="/instruction"/>
    </div>
    </div>
  )
}
