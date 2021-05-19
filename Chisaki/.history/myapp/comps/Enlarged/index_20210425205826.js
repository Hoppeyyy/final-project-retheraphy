import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router' 

const Cont = styled.div`
width:375px;
display:flex;
flex-direction:column;
color:#52A1C3;
justify-content:center;
align-items:center;
border-bottom:${props=>props.borderBottom}px;
border-top:${props=>props.borderTop}px;


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
font-family: 'Saira Semi Condensed', sans-serif;
width:80%;
text-align:center;
margin-left:5px;
line-height:12px

`;
const UlCont = styled.div`
display:flex;
flex-direction:column;
visibility:${props=>props.visivility};
`;
const Ultitle = styled.p`
text-align:left;
margin-left:5px;

`;

const EnlargedUI = ({
    title="",
    subtext="",
    src="",
    routeTo="",
    Pstyle="Based on the level of your mental illness level, we will provide some suggestions that you can try to make you happy. Our suggestions are all based on the study. If you want to check our suggestions before you take quizzes, you can check them by clicking See Suggestion Button.",
    ultitle="The suggestion part Including:",
    visivility="hidden",

    }) => {
      const router = useRouter();
      return <Cont>
      <Img src={src} onClick={()=>router.push(routeTo)}/>
      <Head>{title}</Head>
      <Subhead>{subtext}</Subhead>
    <Ps>{Pstyle}<br /><br /></Ps>

    <UlCont  visivility={visivility}>
    <Ultitle>{ultitle}</Ultitle>
    <ul>
      <li>Common Mental Illuness</li>
      <li>Symptom Diagnosis</li>
      <li>Suggestion</li>
      <li>Reach For Help</li>
    </ul>
    </UlCont>
      </Cont>
    }

export default EnlargedUI;