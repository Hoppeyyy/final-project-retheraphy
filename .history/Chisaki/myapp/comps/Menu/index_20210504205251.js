import styles from '../../styles/Home.module.css'
import styled from 'styled-components';
import React, {useState} from 'react';

const MenuCont = styled.div`

`;
const MenuIcon = styled.img`
width:26px;
height:24px;
position:absolute;
left:340px;
top:17px;
color:#FFFFFF;
`;

const Cont = styled.div`
width:${props=>props.width}px;;
height:${props=>props.height}px;px;
visivility:${props=>props.visivility};
position:absolute;
top:194px;
color:#CDF0EE;
border-radius: 30px 30px 0px 0px;
overflow:hidden;
transition:max-width 0.5s, max-height 0.5s;
`;

const HeadImg = styled.img`
align-items:right;
margin-left:20px;
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
margin-left:20px;
`;

const MenuUI= ({
  
  })=>{
    const [open, setOpen] = useState(true);

    var width = 0, height = 0;
    if(open){
      width=377;
      height=476;
      visibility="visible";
    }
    return<MenuCont>
      <MenuIcon 
      onClick={()=>setOpen(!open)}
      src="/icons/menu.png" />
      <Cont width={width} height={height} visibility={visibility}>
      <HeadImg 
      src="/menu/close.png"
      onClick={()=>setOpen(open)}
      />
      <Box>
        <Items onClick={()=>router.push("/how_it_works")}><img src="/menu/how.png"/><Title>How It Works</Title></Items>
        <Items onClick={()=>router.push("/intro")}><img src="/menu/about.png"/><Title>About Us</Title></Items>
        <Items onClick={()=>router.push("/terms")}><img src="/menu/test.png"/><Title>Test</Title></Items>
        <Items onClick={()=>router.push("/learn_more")}><img src="/menu/learn.png"/><Title>Learn</Title></Items>
        <Items onClick={()=>router.push("/suggestions")}><img src="/menu/suggestion.png"/><Title>Suggestions</Title></Items>
        <Items onClick={()=>router.push("/help")}><img src="/menu/help.png"/><Title>Help Line</Title></Items>
      </Box>
    </Cont>
    </MenuCont>
  }
     
    export default MenuUI;