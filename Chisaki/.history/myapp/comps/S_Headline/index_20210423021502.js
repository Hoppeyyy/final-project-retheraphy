import styles from '../../styles/Home.module.css'
import styled from 'styled-components'

const Container = styled.div`
width:375px;
display: flex;
flex-direction: column;
`;
const TitlePic = styled.div`
width:375px;
display:flex;
flex-direction:row;
justify-content:space-between;
`;

const Headline = styled.h2`
margin:0;
margin-top:20px;
textAlign: left;
font-family: Saira SemiCondensed, sans-serif;
font-style: normal;
font-weight: bold;
color: #52A1C3;
`;

const Image = styled.img`
width: 65px;
height: 75px;
`;

const Subhead = styled.h3`
margin:0;
margin-bottom:20px;
font-family: Saira SemiCondensed, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
color: #52A1C3;
textAlign: left;
`;


const HeadlineUI = ({
    title = "Symptom Diagnosis",
    subtitle = "Effect occured on different body parts",
    src = "/Icon.png"
        }) => {
        return <Container>
        <TitlePic>
        <Headline>{title}</Headline>
        <Image src={src}/>
        </TitlePic>
        <Subhead>{subtitle}</Subhead>
        </Container>
        }
        
        export default HeadlineUI;