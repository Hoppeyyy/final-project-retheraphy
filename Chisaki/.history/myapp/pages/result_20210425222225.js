import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FolderUI from '../comps/Folder/index2'
import TopBar from '../comps/TopBar/index2'
import ResultUI from '../comps/Result'
import ButtonUI from '../comps/Button/index2'





export default function result() {
  return (
    <div className={styles.base}>
      <TopBar></TopBar>
      <ResultUI></ResultUI>
      <FolderUI />
      <p>*result does not represent a real medical diagnosis.</p>
      <div className={styles.suggestButton}>
      <ButtonUI
      title="Learn More"
      subtext= ""
      routeTo="/learn"
      />
     
      </div>
    </div>

  )
}