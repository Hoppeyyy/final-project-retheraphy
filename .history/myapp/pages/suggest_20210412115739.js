import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FolderUI from '../comps/Folder'





export default function Suggest() {
  return (
    <div className={styles.container}>
      <FolderUI />
      <p></p>
    </div>

  )
}