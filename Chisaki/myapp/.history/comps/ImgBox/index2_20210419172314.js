import styles from '../../styles/Home.module.css'
import styled from 'styled-components';


const Container = styled.div`
width:375,
  height:30,
`;
  
const HeadStyle = styled.h1`
line-height: 0.5;
margin-bottom:20px;
color:#52A1C3;
`;

const SubStyle = styled.p`
line-height:0.5;
margin-bottom:20px;
color:#52A1C3;
font-size:20px;
`;

const Intro_headingUI = ({
title="Heading",
subtext="subtitle",
}) => {
 
  return <HeadingBox>
    <HeadStyle>{title}</HeadStyle>
<SubStyle>{subtext}</SubStyle>
  </HeadingBox>
}


export default Intro_headingUI;