import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../comps/Button'
import BigButton from '../comps/BigButton'
import AnswerUI from '../comps/Answer'
import QuestionUI from '../comps/Question'
import DotsUI from '../comps/Dots'
import NumberUI from '../comps/'



export default function Home() {
  return (
    <div className={styles.container}>
      <QuestionUI />
      <br></br>
      <AnswerUI />
      <br></br>
      <div className={styles.dots_container}>
      <DotsUI />
      </div>
      <div className={styles.buttonBox}>
      <Button />
      <Button />
      </div>
      <div className={styles.number_container}>
      <Number />
      </div>
    </div>
  )
}
