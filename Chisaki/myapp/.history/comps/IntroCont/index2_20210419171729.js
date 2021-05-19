import styled from 'styled-components';


const contentStyle = styled.div`

width:375px;
`;
  
const pStyle = styled.p`
margin:5px;
color:#52A1C3;
font-family:'Roboto, sans-serif';
`;

const IntroContUI = ({
content="Retheraph is come from theraphist, our goal is to make our app be like your therphist that show the potential illness you may have."
}) => {
 
  return <contentStyle>
  <pStyle>{content}</pStyle>
  </contentStyle>
}


export default IntroContUI;