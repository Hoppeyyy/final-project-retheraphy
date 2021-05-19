import styles from '../../styles/Home.module.css'
import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router' 

const MenuCont = styled.div`

`;
const MenuIcon = styled.img`
width:24px;
height:24px;
margin-top:7px;
margin-right:7px;
color:#FFFFFF;
`;

const Cont = styled.div`
width:${props=>props.width}px;;
height:${props=>props.height}px;
visibility:${props=>props.visibility};
position:absolute;
top:200px;
background-color:#CDF0EE;
border-radius: 30px 30px 0px 0px;
overflow:hidden;
z-index:1;
animation-name: fadeup;
animation-duration: 4s;
animation-iteration-count:1;
@keyframes fadeup {
  from {
      opacity: 0;
      transform: translateY(200px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
`;

const HeadImg = styled.img`
position:absolute;
top:20px;
left:320px;
`;

const Box = styled.div`
display:flex;
flex-direction:column;
position:absolute;
top:60px;
`;

const Items= styled.div`
display:flex;
flex-direction:row;

`;
const Icons = styled.img`
width:30px;
height:30px;
margin-left:30px;
margin-top:20px;
`;
const Title = styled.h3`
color:#52A1C3;
margin-left:20px;
`;

const MenuUI= ({
  
  })=>{
    const router = useRouter();
    const [open, setOpen] = useState(false);

    var width = 0, height = 0, visibility = "hidden";
    if(open){
      width="377;
      height=476;
      visibility="visible";
    }
    return<MenuCont>
      <MenuIcon 
      onClick={()=>setOpen(!open)}
      src="/icons/menu.png" 
     
      />
      <Cont width={width} height={height} visibility={visibility}>
      <HeadImg 
      src="/menu/close.png"
      onClick={()=>setOpen(!open)}
      />
      <Box>
        <Items onClick={()=>router.push("/how_it_works")}><Icons src="/menu/how.png"/><Title className={styles.hover}>How It Works</Title></Items>
        <Items onClick={()=>router.push("/intro")}><Icons src="/menu/about.png" /><Title className={styles.hover}>About Us</Title></Items>
        <Items onClick={()=>router.push("/terms")}><Icons src="/menu/test.png" /><Title className={styles.hover}>Mental Test</Title></Items>
        <Items onClick={()=>router.push("/learn_more")}><Icons src="/menu/learn.png" /><Title className={styles.hover}>Learn More</Title></Items>
        <Items onClick={()=>router.push("/suggestions")}><Icons src="/menu/suggestion.png" /><Title className={styles.hover}>Suggestions</Title></Items>
        <Items onClick={()=>router.push("/help")}><Icons src="/menu/help.png" /><Title className={styles.hover}>Help Line</Title></Items>
      </Box>
    </Cont>
    </MenuCont>
  }
     
    export default MenuUI;