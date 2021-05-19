import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const MenuCont = styled.div`

`;
const MenuIcon = styled.img`

`;

const Cont = styled.div`
width:${props=>props.width}px;;
height:${props=>props.height}px;px;
position:absolute;
top: ${props=>props.top}px;
color:#CDF0EE;
border-radius: 30px 30px 0px 0px;
overflow:hidden;
transition:max-width 0.5s, max-height 0.5s;
`;

const HeadImg = styled.img`
align-items:right;
margin-right:20px;
`;

const Box = styled.div`
display:flex;
flex-direction:column;
`;

const Items= styled.div`
display:flex;
flex-direction:row;
`;

const Title = styled.h3`
color:#52A1C3;
text-decoration:underline;
`;

const MenuUI= ({
  
  })=>{
    const [open, setOpen] = useState(true);

    var width = 0, height = 0;
    if(open){
      width=377;
      height=476;
      top=191;
    }
    return<MenuCont>
      <MenuIcon 
      onClick={()=>setOpen(!open)}
      src="/icons/menu.png" />
      <Cont width={width} height={height} top={top}>
      <HeadImg 
      src="/menu/close.png"
      onClick={()=>setOpen(open)}
      />
      <Box>
        <Items onClick={()=>router.push("/how_it")}><img src="/menu/how.png"/><Title>How It Works</Title></Items>
        <Items><img src="/menu/about.png"/><Title>About Us</Title></Items>
        <Items><img src="/menu/test.png"/><Title>Test</Title></Items>
        <Items><img src="/menu/learn.png"/><Title>Learn</Title></Items>
        <Items><img src="/menu/suggestion.png"/><Title>Suggestions</Title></Items>
        <Items><img src="/menu/help.png"/><Title>Help Line</Title></Items>
      </Box>
    </Cont>
    </MenuCont>
  }
     
    export default MenuUI;