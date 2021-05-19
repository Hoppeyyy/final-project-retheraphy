import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router' 
import {useState} from 'react'


const Cont = styled.div`
display: flex;
flex-direction:column;
width: 375px;
border: 1px solid #82DED9;
border-bottom:${props=>props.borderBottom}px;
border-top:${props=>props.borderTop}px;
box-sizing: border-box;
justify-content:center;
align-items:center;
`;

const ContBox=styled.div`
display:flex;
flex-grow:1;
flex-direction:column;
height:90%;
width:290px;
justify-content:center;
align-items:center;
`;
const Img = styled.img`
    margin:0,
    width:107px;
    height:60px;
    display: block
    
  
`;

const Headline = styled.h2`
font-family: Saira SemiCondensed;
font-style: normal;
font-weight: bold;
font-size: 16px;
text-align: center;
color: #52A1C3;
`;

const Subhead = styled.p`
font-family: Saira SemiCondensed;
font-style: normal;
font-weight: normal;
font-size: 16px;
text-align: center;
color: #52A1C3;
`;


    const SelectionUI = ({
      title="Take the test",
      subtext="Complete the 6 Questions test",
      src="http://placekitten.com/50/50",
      routeTo="/",
      borderTop="",
      borderBottom="",
      }) => {
        const router = useRouter();
        return <Cont borderBottom={borderBottom} borderTop={borderTop}>
          <ContBox>
        <Img src={src} onClick={()=>router.push(routeTo)}/>
        <Headline>{title}</Headline>
        <Subhead>{subtext}</Subhead>
        </ContBox>
        </Cont>
      }
  
export default SelectionUI;
