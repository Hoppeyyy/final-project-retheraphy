import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FolderUI from '../comps/Folder'





export default function suggest() {
  return (
    <div className={styles.container}>
      <FolderUI />
    </div>

  )
}