import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Menu = styled.img`
width:26px;
height:24px;
position:absolute;
left:340px;
top:17px;
color:#FFFFFF;
''


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