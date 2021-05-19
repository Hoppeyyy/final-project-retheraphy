import styles from '../../styles/Home.module.css';
import React from 'react';
import styled from 'styled-components';


const HelpBox = styled.div`
    color:#52A1C3;
    fontfamily: 'Roboto sans-serif';
    text-align:left;
    width: 377px;
    magin-left:30px;
`;

const Header =styled.div`
    display:inline-flex;
    flex-direction:row;
`;

const Number = styled.strong`
    border-radius: 50%;
    width:30px;
    height: 30px;
    background-color:#52A1C3;
    color:#FFFFFF;
    text-align: center;
    margin
`;

const Title = styled.h3`
    font-size:30px;
    margin:25px;
    width: 375px;
`;
const Content =styled.h4`
    margin-left:65px;
    text-indent: 20px;
    font-size: 16px;
    margin-top:0px;
`;

const HelpBoxUI = ({
    number="1",
    title="title",
    content="this is content",
}) => {
    return (
    <div><HelpBox>
        <Header>
        <Number>{number}</Number>
        <Title>{title}</Title>
        </Header>
        <Content>{content}</Content>
    </HelpBox>
    </div>
    )
}
export default HelpBoxUI;
