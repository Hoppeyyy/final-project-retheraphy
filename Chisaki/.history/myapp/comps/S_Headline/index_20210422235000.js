import styles from '../../styles/Home.module.css'
import styled from 'styled-components'

const Headline = styled.h2`
display: flex;
textAlign: left;
padding: 10px;
font-family: Saira SemiCondensed, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 47px;
color: #52A1C3;
`;
const Subhead = styled.h3`
lineHeight: 0.5;
margin-bottom:20px;
font-family: Saira SemiCondensed, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
color: #52A1C3;
textAlign: left;
`;
const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;
flex-wrap: nowrap;`;


const Image = styled.img`
display: block;
text align:right;
margin-right: 5px;
width: 66px;
height: 75px;
flex-wrap: nowrap;`;

const HeadlineUI = ({
    title = "Symptom Diagnosis",
    subtitle = "Effect occured on different body parts",
    src = "/Icon.png"
        }) => {
        return <Container>
        <Headline>{title}</Headline>
        <Subhead>{subtitle}<Image src={src}/></Subhead>
        </Container>
        }
        
        export default HeadlineUI;