import styles from '../../styles/Home.module.css'
import styled from 'styled-components';


const contentStyle = styled.div`
font-family: 'Roboto, sans-serif';
text-align:left;
padding:10px,
color:#52A1C3;
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
 
  return <headingBox>
    <HeadStyle>{title}</HeadStyle>
<SubStyle>{subtext}</SubStyle>
  </headingBox>
}


export default Intro_headingUI;