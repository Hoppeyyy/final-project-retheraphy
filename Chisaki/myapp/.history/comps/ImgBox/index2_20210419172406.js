import styles from '../../styles/Home.module.css'
import styled from 'styled-components';


const Container = styled.div`
width:375px;
height:30px;
`;
  
const HeadStyle = styled.img`
margin:0px;
width:100px;
height:80px;
`;


const ImgUI = ({
title="Heading",
subtext="subtitle",
}) => {
 
  return <HeadingBox>
    <HeadStyle>{title}</HeadStyle>
<SubStyle>{subtext}</SubStyle>
  </HeadingBox>
}


export default Intro_headingUI;