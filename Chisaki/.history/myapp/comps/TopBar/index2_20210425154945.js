import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styles.div`
background-color:#82DED9;
width:375px;
height:60px;
`;

const HomeIcon = styled.img`

`;
const HomeIcon = styled.img`

`;
const TopBar= ({

})=>{
  const router = useRouter();
  return<Cont>
<HomeIcon />
  </Cont>
}
   
  export default TopBar;

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
