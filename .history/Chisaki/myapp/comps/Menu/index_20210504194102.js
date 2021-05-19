import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Menu= ({
  routeTo="/",
  visibility="visible"
  })=>{
    const router = useRouter();
    return<Cont>
  <HomeIcon 
  src="/image/home.png"
  onClick={()=>router.push(routeTo)} 
  visibility={visibility}
  />
  <Logo 
  src="/apps_pic/app_logo.png"
  visibility={visibility}
  />
  <Menu 
  src="/icons/menu.png"
  
  />
    </Cont>
  }
     
    export default Menu;