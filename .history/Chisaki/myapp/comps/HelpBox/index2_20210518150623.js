import styles from '../../styles/Home.module.css';
import React from 'react';
import styled from 'styled-components';


const HelpBox = styled.div`
    color:#52A1C3;
    text-align:left;
    width: 377px;
    font-family:Roboto, sans-serif;
`;

const Header =styled.div`
    display:flex;
    flex-direction:row;
    margin-left:20px;
`;

const Number = styled.strong`
    border-radius: 50%;
    width:30px;
    height: 30px;
    background-color:#CDF0EE;
    color:#FFFFFF;
    text-align: center;
    font-family:Roboto, sans-serif;
`;

const Title = styled.h3`
  margin-left:20px;
  margin-top:0;
  font-family:Roboto sans-serif;
`;
const Content =styled.p`
    width:80%;
    margin-left:65px;
    font-size: 16px;
    margin-top:0px;
    line-height:20px;
    font-family:Roboto sans-serif;
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
