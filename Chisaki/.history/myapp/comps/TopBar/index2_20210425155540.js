import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styled.div`
background-color:#000000;
width:375px;
height:43px;
display:flex;
flex-direction:row;
`;

const HomeIcon = styled.img`
width:24px;
height:24px;
text-align:left;
margin-left:5px;
margin-top:10px;
`;
const Logo = styled.img`
width:
margin-left:40px;
`;
const Menu = styled.img`

`;
const TopBar= ({

})=>{
  const router = useRouter();
  return<Cont>
<HomeIcon 
src="/image/home.png" 
/>
<Logo 
src="/apps_pic/logo.png" />
<Menu />
  </Cont>
}
   
  export default TopBar;



