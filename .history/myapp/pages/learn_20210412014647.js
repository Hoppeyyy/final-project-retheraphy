import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeadingUI from '../comps/Heading'
import ContentUI from '../comps/Content'




export default function Learn() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
    <HeadingUI />
    </div>
    <div className={styles.contentBox}>
    <ContentUI />
    <ContentUI />
    </div>
    </div>

  )
}