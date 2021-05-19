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
    src="apps_pic/img_learn.png" 
    title="Understand mental illness" 
    subtext="Learn about the physical and mental symptoms "
    routeTo="/suggestion"
    Pstyle= "Mental health and physical health are fundamentally linked. People living with a serious mental illness are at higher risk of experiencing a wide range of chronic physical conditions. To learn more, please clicking LEARN MORE Button."
    visivility=""
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
