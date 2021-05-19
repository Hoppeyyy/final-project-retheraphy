import styles from '../../styles/Home.module.css'
import styled from 'styled-components'

const Cont = styled.div`
width:90%;
height: 450px;
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
font-size: 12px;
color: #52A1C3;
margin:0;
margin-top:5px;
font-family:Roboto, sans-serif;
`; 
const Icon = styled.img`
height:30px;
width:30px;
`;
const Image = styled.img`
justify-content:center;
height: 300px;
width: 120px;
margin: 25px;

`;

const PictureUI = ({
src = 'image/illustration.png'
    }) => {
   return <Cont>
    <Wrap>
    <Icon src="/icon.png"/>
    <Inst>Click buttons</Inst>
    </Wrap>
   <Image src={src}/>
   </Cont>

    }




export default PictureUI;