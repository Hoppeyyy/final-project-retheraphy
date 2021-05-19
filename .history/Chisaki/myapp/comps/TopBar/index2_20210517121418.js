import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 
import MenuUI from '../Menu'

const Cont = styled.div`
background-color:#82DED9;
width:100vw;
height:43px;
display:flex;
flex-direction:row;
justify-content:space-between;
`;

const HomeIcon = styled.img`
width:24px;
height:24px;
visibility:${props=>props.visibility};
`;
const Logo = styled.img`
width:135px;
height:30px;
visibility:${props=>props.visibility};
`;
const Menu = styled.img`
width:26px;
height:24px;
position:absolute;
left:340px;
top:17px;
color:#FFFFFF;

`;
const TopBar= ({
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
<MenuUI />
{/*
<Menu 
src="/icons/menu.png"
/>*/}

  </Cont>
}
   
  export default TopBar;



