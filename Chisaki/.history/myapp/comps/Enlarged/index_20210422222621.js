import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router' 

const Img = styled.img`
margin:0;
width:191px;
height:126px;
display: block;
text-align: center;
`;

const Head = styled.h2`
font-family: Saira SemiCondensed;
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 25px;
text-align: center;
color: #52A1C3;`;

const Subhead = styled.h3`
font-family: Saira SemiCondensed;
font-style: normal;
font-weight: bold;
font-size: 14px;
text-align: center;
line-height: 22px;
color: #52A1C3;`;

const EnlargedUI = ({
    title,
    subtext,
    src,
    routeTo
    }) => {
      const router = useRouter();
      return 
      <Cont>
      <Img src={src} onClick={()=>router.push(routeTo)}/>
      <Head>{title}</Head>
      <Subhead>{subtext}</Subhead>
      </Cont>
    }

export default EnlargedUI;