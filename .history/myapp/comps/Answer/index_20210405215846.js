import BigButton from '../BigButton'
import styles from '../../styles/Home.module.css'

function AnswerUI (){
  return(
    <div className={styles.answerbox}>
    <BigButton />
    <BigButton />
    <BigButton />
    <BigButton />
    </div>
  )
}

export default AnswerUI;