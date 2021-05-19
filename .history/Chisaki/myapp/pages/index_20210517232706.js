import HomeUI from '../comps/Home/index'
import Head from 'next/head';
import styles from '../styles/Home.module.css'



export default function Home() {
    return (
          <Head>
            <body className={styles.body}>
          <HomeUI />
            </body>
          </Head>
    )
  }