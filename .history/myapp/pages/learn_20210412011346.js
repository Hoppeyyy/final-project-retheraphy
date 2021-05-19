import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeadingUI from '../comps/Heading'




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
      <NumberUI />
      </div>
    </div>

  )
}