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
    title="Get the resurlt"
    subhead="Get the result base on the mental test"
    />
    <div className={styles.containerbox}>
    <EnlargedUI 
    src="apps_pic/result.jpg" 
    title="" 
    subtext=""
    routeTo=""
    Pstyle= {<div>After you answered 6 questions, you can check the result of your mental health conditions. The result will display 3 different types (Anxiety disorder, Bipolar disorder, Major depressive disorder) of mental illnesses.</div>}
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