import styles from '../../styles/Home.module.css';
import React from 'react';
import styled from 'styled-components';


const HelpBox = styled.div`
    color:#52A1C3;
    fontfamily: 'Roboto sans-serif';
    text-align:left;
    width: 377px;
`;

const Header =styled.div`
    display:flex;
    flex-direction:row;
`;

const Number = styled.strong`
    border-radius: 50%;
    width:30px;
    height: 30px;
    background-color:#52A1C3;
    color:#FFFFFF;
    text-align: center;
`;

const Title = styled.h3`
  margin-left:20px;
  margin-top:0;
`;
const Content =styled.p`
    margin-left:65px;
    font-size: 16px;
    margin-top:0px;
    font-size:
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
