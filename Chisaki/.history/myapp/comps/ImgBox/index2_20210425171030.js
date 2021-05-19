import styles from '../../styles/Home.module.css'
import styled from 'styled-components';


const Container = styled.div`
width:377px;
`;
  
const Img = styled.img`
margin:0px;
width:${props=>props.width}px;
height:${props=>props.height}px;
`;


const ImgBoxUI = ({
src="/apps_pic/img_learn.png",
width="100px",
height="80px",
}) => {
 
  return <Container>
    <ImgBoxUI 
    src={src} 
    width={width} height={height}></ImgBoxUI>
  </Container>
}


export default ImgBoxUI;