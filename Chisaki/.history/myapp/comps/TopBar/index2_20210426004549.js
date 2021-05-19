import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styled.div`
background-color:#82DED9;
width:377px;
height:43px;
display:flex;
flex-direction:row;
`;

const HomeIcon = styled.img`
width:24px;
height:24px;
text-align:left;
position:absolute;
left:20px;
top:15px;

`;
const Logo = styled.img`
width:115px;
height:25px;
position:absolute;
left:140px;
top:13px;
visivility:${props=>props.visivility}
`;
const Menu = styled.img`
width:26px;
height:24px;
position:absolute;
left:340px;
top:17px;
color:#FFFFFF;
visivility:${props=>props.visivility}
`;
const TopBar= ({
routeTo="/"
visivility="visible"
})=>{
  const router = useRouter();
  return<Cont>
<HomeIcon 
src="/image/home.png"
onClick={()=>router.push(routeTo)} 
/>
<Logo 
src="/apps_pic/logo.png"
visivility={}
/>
<Menu 
src="/icons/menu.png"/>
  </Cont>
}
   
  export default TopBar;



