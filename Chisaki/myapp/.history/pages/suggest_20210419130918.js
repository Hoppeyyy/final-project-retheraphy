import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FolderUI from '../comps/Folder'
import TopBar from '../comps/TopBar'
import ResultUI from '../comps/Result'
import ButtonUI from '../comps/Button/index2'





export default function Suggest() {
  return (
    <div className={styles.container}>
      <TopBar></TopBar>
      <ResultUI></ResultUI>
      <FolderUI />
      <p>*result does not represent a real medical diagnosis.</p>
      
      <ButtonUI></ButtonUI>
      <ButtonUI></ButtonUI>
    </div>

  )
}