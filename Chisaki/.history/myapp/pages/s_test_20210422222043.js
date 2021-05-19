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
    <img src="apps_pic/test.jpg" width="250px" height="150px" />
    <EnlargedUI src="apps_pic/test.jpg" title="Take our Suggestion" subtext="General suggestion base on common mental issue<br></br> 
      Our research team include professional psychologist, by study the experiences of client, we gather those information to make the suggestion part. 
      The suggestion part Including:
      {<ul>
      <li>Common Mental Illness</li>
      <li>Symptom Diagnosis</li>
      <li>Suggestion</li>
      <li>Reach For Help</li>
      </ul>"/>
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
