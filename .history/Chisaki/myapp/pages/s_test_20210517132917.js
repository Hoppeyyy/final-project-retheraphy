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
    title="Take the test"
    subhead="Complete the 6 questions test"
    />
    <div className={styles.containerbox}>
    <EnlargedUI 
    src="apps_pic/test.jpg" 
    title="" 
    subtext=""
    routeTo=""
    Pstyle= {<div>There are <span className={styles.span}>a total of 6 questions</span>  in the app to scale your mental illness level. <span className={styles.span}></span>Based on your condition today, please select the closest answer from the choices. You can always review your answers to change.</div>}
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
