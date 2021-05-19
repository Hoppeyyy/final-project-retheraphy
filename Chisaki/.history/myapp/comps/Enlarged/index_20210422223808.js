import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router' 

const Cont = styled.div`
width:375px;
text-align:center;
display:flex;
flex-direction:column;
color:#52A1C3;
justify-content:center;
align-items:center;
border: 1px solid #82DED9;
border-bottom:${props=>props.borderBottom}px;
border-top:${props=>props.borderTop}px;
box-sizing: border-box;

`;

const Img = styled.img`
width:191px;
height:126px;
text-align: center;
`;

const Head = styled.h2`
font-family: Saira SemiCondensed;
font-size: 16px;
text-align: center;
color: #52A1C3;
margin:0;
`;

const Subhead = styled.h3`
font-family: Saira SemiCondensed;
font-style: normal;
font-weight: bold;
font-size: 14px;
text-align: center;
line-height: 22px;
color: #52A1C3;
margin:0;
margin-top:5px;
`;

const Ps = styled.p`
text-align:left;
`;

const EnlargedUI = ({
    title="",
    subtext="",
    src="",
    routeTo="",
    Pstyle= "Our research team include professional psychologist, by study the experiences of client, we gather those information to make the suggestion part.",
    Pstyle2="The suggestion part Including:"

    }) => {
      const router = useRouter();
      return <Cont>
      <Img src={src} onClick={()=>router.push(routeTo)}/>
      <Head>{title}</Head>
      <Subhead>{subtext}</Subhead>
    <Ps>{Pstyle}</Ps>
    <Ps2>{Pstyle2}</Ps2>
      </Cont>
    }

export default EnlargedUI;