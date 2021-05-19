import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styled.div`
background-color:#82DED9;
width:375px;
height:60px;
`;

const HomeIcon = styled.img`
width:35px;
height:35px;
text-align:left;
margin-left:5px;
`;
const Logo = styled.img`
width:200px;
height:50px;
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
src="/image/home.png" />
<Menu />
  </Cont>
}
   
  export default TopBar;



