import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styles.div`
`;

const TopBar() {
    return (
      < div className={styles.topBar}>
        <img src="/image/home.png" 
        style={{
          width:35,
          height:35,
          textAlign:"left",
          marginLeft:5,
          
        }}/>
        <img src="/image/logo_bg.png"
        style={{
          width:200,
          height:50,
          marginLeft:40,
        }}/>
      </div>
    )
  }
  export default TopBar;
  const HomeUI = ({
    ps="Check your mental condition & Take  care your mental health",
    
    
    
    }) => {
      const router = useRouter();
      return <CardCont>
        <TopBar />
      <Cont>
        <C1></C1>
        <C2></C2>
        <C3></C3>
        <Logo src="/apps_pic/logo.png"></Logo>
        <Text>{ps}</Text>
        <div className={styles.HomeBox}>
          <ButtonUI 
          title="Start"
          subtext=""
          routeTo='/intro'
          bgcolor="#52A1C3"
          />
          </div>
      </Cont>
      </CardCont>
    }
    
    
    export default HomeUI;