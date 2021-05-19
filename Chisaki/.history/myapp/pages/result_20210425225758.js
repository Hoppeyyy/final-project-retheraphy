import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SliderUI from '../comps/Slider/index2'
import TopBar from '../comps/TopBar/index2'
import ResultUI from '../comps/Result'
import ButtonUI from '../comps/Button/index2'





export default function result() {
  return (
    <div className={styles.base}>
      <TopBar></TopBar>
      <ResultUI></ResultUI>
      <SliderUI 
      your_level="Anxiety disorder"
      level="Sever"
      />
      <SliderUI 
       your_level="Bipolar disorder"
       level="Mild"
      />
      <SliderUI 
      your_level="Depressive disorder"
      level="Mild"
      />
      <div className={styles.suggestButton}>
      <ButtonUI
      title="Learn More"
      subtext= ""
      routeTo="/learn"
      bgcolor="#52A1C3"
      />
     
      </div>
      <p>*Result does not represent a real medical diagnosis.</p>
    </div>

  )
}