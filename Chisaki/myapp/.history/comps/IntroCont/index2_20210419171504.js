import styles from '../../styles/Home.module.css'
import styled from 'styled-components';


const contentStyle = styled.div`
font-family:'Roboto, sans-serif';
text-align:left;
width:375px;
color:#52A1C3;
`;
  
const pStyle = styled.p`
margin:5px;
color:#52A1C3;

`;

const IntroContUI = ({
content="Retheraph is come from theraphist, our goal is to make our app be like your therphist that show the potential illness you may have."
}) => {
 
  return <contentStyle>
  <pStyle>{content}</pStyle>
  </contentStyle>
}


export default IntroContUI;