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
    title="Get suggestions"
    subhead="See suggestions for treating the mental illnesses"
    />
    <div className={styles.containerbox}>
    <EnlargedUI 
    src="apps_pic/suggestion.png" 
    title="" 
    subtext=""
    routeTo=""
    Pstyle= {<div>We provide suggestions that help to improve your mental health. Our suggestions are based on the study and research. To check our suggestions, please click SEE SUGGESTION Button.</div>}
    />
    </div>
    <div className={styles.buttonBox}>
    <Button 
    title="BACK"
    subtext=""
    routeTo="/how_it_works"
    bgcolor="#52A1C3"
    />
    {/*needs to change the routeTo URL to jump to suggestion page */}
     <Button 
    title="SEE SUGGESTION"
    subtext=""
    routeTo="suggestions"
    bgcolor="#52A1C3"
    />
    </div>
    </div>
  )
}
