import styles from '../../styles/Home.module.css'
import styled from 'styled-components'

const Cont = styled.div`
width:90%;
height: 400px;
border: 2px solid #82DED9;
text-align: left;
display: block;
margin-left:20px;
`;

const Icon = styled.img`

`;
const Image = styled.img`
justify-content:center;
height: 350px;
width: 150px;
margin: 25px;

`;

const PictureUI = ({
src = 'image/illustration.png'
    }) => {
   return <Cont>
    <Icon
   <Image src={src}/>
   </Cont>

    }




export default PictureUI;