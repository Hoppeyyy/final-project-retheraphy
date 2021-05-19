import styles from '../styles/Home.module.css'
import Button from '../comps/Button/index2'
import TopBar from '../comps/TopBar/index2'
import J_Head from '../comps/J_Head'
import EnlargedUI from '../comps/Enlarged'





export default function Test() {
  return (
    <div className={styles.base}>
     <TopBar />
     <J_Head
    title="Understand mental illness"
    subhead="Learn about the physical and mental symptoms"
    />
    <div className={styles.containerbox}>
    <EnlargedUI 
    src="apps_pic/result.jpg" 
    title="" 
    subtext=""
    routeTo=""
    Pstyle= "After answering the 6 questions, the app will show you the result of your mental illness level with 3 types which are Anxiety disorder, Bipolar disorder, and major depressive disorder."
    />
    </div>
    <div className={styles.buttonBox}>
    <Button 
    title="BACK"
    subtext=""
    routeTo="/how_it_works"
    bgcolor="#52A1C3"
    />
     <Button 
    title="TAKE TEST"
    subtext=""
    routeTo="/terms"
    bgcolor="#52A1C3"
    />
    </div>
    </div>
  )
}
