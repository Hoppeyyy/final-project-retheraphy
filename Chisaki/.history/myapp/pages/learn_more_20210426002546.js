import Head from 'next/head'
import styled from 'styled-components';
import styles from '../styles/Home.module.css'
import ResultUI from '../comps/Result/index2'
import ButtonUI from '../comps/Button/index2'
import TopBar from '../comps/TopBar/index2'
import BigButton from '../comps/BigButton/index3'




export default function Learn() {
  return (
    <div className={styles.base}>
      <TopBar />
    <ResultUI
    src="apps_pic/img_learn.png"
    width=""
    height=""
    h3="Understand Mental Illness"
    content="There are several types of mental illnesses, and the reasons and effects of having these illnesses are different. Please click the buttons to learn more about mental illnesses!"
    display=""
    />
    <div className={styles.learnMoreBtn}>
    <BigButton 
    heading="Top 3 Mental illness"
    routeTo="/learn"
    />
    <BigButton 
    heading="Physical Diagram"
    routeTo="/diagram"
    />
    {/*chnage the routeTo to Symptom Indicator page */}
    <BigButton 
    heading="Symptom Indicator"
    routeTo=""
    />
    </div>
    <div className={styles.buttonBox}>

    <ButtonUI
    title="BACK TO RESULT"
    subtext= ""
    routeTo="/RESULT"
    bgcolor="#52A1C3"
    />
     <ButtonUI
    title="BACK TO "
    subtext= ""
    routeTo="/s_understand"
    bgcolor="#52A1C3"
    />
    {/*chnage the routeTo to suggestion page */}
     <ButtonUI
    title="SEE SUGGESTION"
    subtext= ""
    routeTo="/"
    bgcolor="#52A1C3"
    />
    </div>
    </div>

  )
}