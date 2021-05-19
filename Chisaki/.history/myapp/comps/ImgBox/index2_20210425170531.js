import styles from '../../styles/Home.module.css'
import styled from 'styled-components';


const Container = styled.div`
width:377px;
`;
  
const Img = styled.img`
margin:0px;
width:${props.props.width}
height:80px;
`;


const ImgBoxUI = ({
src="/apps_pic/img_learn.png",
}) => {
 
  return <Container>
    <ImgBoxUI src={src}></ImgBoxUI>
  </Container>
}


export default ImgBoxUI;