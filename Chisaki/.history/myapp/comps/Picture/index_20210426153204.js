import styles from '../../styles/Home.module.css'
import styled from 'styled-components'

const Cont = styled.div`
width:90%;
height: 400px;
border: 2px solid #82DED9;
text-align: left;
display: block;
margin-left:20px;
display:flex;
flex-direction:column;
`;
const Wrap = styled.div`
display:flex;
flex-direction:row;
`;
const Inst = styled.p`
font-family: Saira SemiCondensed;
font-size: 9px;
color: #52A1C3;
`; 
const Icon = styled.img`
height:30px;
width:30px;
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
    <Wrap>
    <
    <Icon src="/icon.png"/>
    </Wrap>
   <Image src={src}/>
   </Cont>

    }




export default PictureUI;