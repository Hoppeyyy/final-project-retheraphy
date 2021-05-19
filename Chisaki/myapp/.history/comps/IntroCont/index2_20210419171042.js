import styles from '../../styles/Home.module.css'
import styled from 'styled-components';


const contentStyle = styled.div`
color:#52A1C3;
font-family:'Roboto, sans-serif';
text-align:left;
text-indent:20px;
font-size:18px;
width:375px;
`;
  
const pStyle = styled.p`
margin:5px;
`;

const IntroContUI = ({
title="Heading",
subtext="subtitle",
}) => {
 
  return <headingBox>
    <HeadStyle>{title}</HeadStyle>
<SubStyle>{subtext}</SubStyle>
  </headingBox>
}


export default IntroContUI;