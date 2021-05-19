import styles from '../../styles/Home.module.css'
import styled from 'styled-components';


const headingStyle = styled.div`
color:#52A1C3;
font-family: 'Roboto, sans-serif';
text-align:left;
padding:10px,
`;
  
const subHeadstyle = styled.h1`
line-height: 0.5;
marginBottom:"20px",
`;

const Ps = styled.p`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:12px;
`;

const ButtonUI = ({
title="NEXT",
subtext="Question2",
routeTo='/question1'
}) => {
  const router = useRouter();
  return <CardCont onClick={()=>router.push(routeTo)}>
    <Heading>{title}</Heading>
<Ps>{subtext}</Ps>
  </CardCont>
}


export default ButtonUI;