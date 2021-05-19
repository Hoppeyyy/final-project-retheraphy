import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FolderUI from '../comps/Folder'
import TopBar from '../comps/TopBar'





export default function Suggest() {
  return (
    <div className={styles.container}>
      <TopBar></TopBar>
      <Result
      <FolderUI />
      <p>*result does not represent a real medical diagnosis.</p>
    </div>

  )
}