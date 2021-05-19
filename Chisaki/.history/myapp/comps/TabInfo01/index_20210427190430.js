import React from 'react'
import styled from 'styled-components';
import styles from '../../styles/Home.module.css'


const Tabs = styled.div`
  background-color:${props=>props.bg};
  border-radius:10px;
  width: 90%;
  height: 410px;
  align-items:center;
  display:flex;
  flex-direction:column;
  text-align: center;
  color:#FFF;
  margin:20px;
`;
const Headstick = styled.img`
width:50px;
height:50px;
justify-content:center;
align-items:center;
position:absolute;
top:150px;
`;
const Detail = styled.p`
font-size: 16px;
line-height: 25px;
text-align: center;
justify-content:center;
color: #52A1C3;
position:relative;
top:70px
`;

const Line = styled.h3`
font-size: 18px;
color: #52A1C3;
text-align: center;
justify-content:center;
position:relative;
top:80px;
`;

const Verb = styled.p`
font-size: 13px;
line-height: 20px;
text-align: center;
text-decoration-line: underline;
color: #52A1C3;
position:relative;
top:70px;
`;
const A = styled.a`
color: #52A1C3;
`;

const Last = styled.p`
font-size: 13px;
text-align: center;
color: #52A1C3;
position:relative;
top:60px;
`;

const Tit = styled.h3`
margin:0;
font-size: 18px;
text-align: center;
color: #52A1C3;
justify-content:center;
align-content: center;
position:relative;
top:70px
`;

const Spa = styled.span`
color: #EF9595;
`;
const TabInfo01 = ({
    bgcolor="#CDF0EE",
    src=""
  }) =>{
    return <Tabs bg={bgcolor}>
      <Headstick src={src}/>
      <Tit>Conditions and Symptoms</Tit>
      <Detail>Anxiety and panic interfere with daily activities, are difficult to control, are out of proportion to the actual danger and can last a long time. <span className={styles.span}>Symptoms may start during childhood or the teen years</span> and continue into adulthood.</Detail>
    <Line>Seeks out for Professionals!</Line>
    <Verb><A  href="https://www.mentalfreedom.ca/">Visit https://www.mentalfreedom.ca/</A></Verb>
    <Last>For professional instruction</Last>
    </Tabs>

}

export default TabInfo01