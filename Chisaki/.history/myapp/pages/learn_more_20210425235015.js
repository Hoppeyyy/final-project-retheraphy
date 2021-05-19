import Head from 'next/head'
import styled from 'styled-components';
import styles from '../styles/Home.module.css'
import ResultUI from '../comps/Result/index2'
import ButtonUI from '../comps/Button/index2'
import TopBar from '../comps/TopBar/index2'
import BigButton from '../comps/BigButton/index2'




export default function Learn() {
  return (
    <div className={styles.base}>
      <TopBar />
    <ResultUI
    src=""
    width=""
    height=""
    h3="Understand Mental Illness"
    content="There are several types of mental illnesses, and the reasons and effects of having these illnesses are different. Please click the buttons to learn more about mental illnesses!"
    display=""
    />
    <div className={styles.contentBox}>
    <BigButton />
    <BigButton />
    <BigButton />
    </div>
    <div className={styles.buttonBox}>

    <ButtonUI
    title="HELP LINE"
    subtext= ""
    routeTo="/help"
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