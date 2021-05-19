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
    title="Take Our Suggestion" 
    subtext=""
    routeTo="/suggestion"
    Pstyle= "Our research team include professional psychologist, by study the experiences of client, we gather those information to make the suggestion part."
    visivility="visible"
    />

    </div>
    <div className={styles.buttonBox}>
      
    <Button 
    title=""
    subtext=""
    routeTo="/suggestion"/>
      <Button 
    title="See Sugestion"
    subtext=""
    routeTo="/suggestion"/>
    </div>
    </div>
  )
}
