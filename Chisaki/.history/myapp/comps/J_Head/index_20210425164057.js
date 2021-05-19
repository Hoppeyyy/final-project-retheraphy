import styles from '../../styles/Home.module.css';
import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`

`;
const Title = styled.h2`
color: #52A1C3;
font-family: 'Saira Semi Condensed', sans-serif;
text-align: left;
margin-bottom:0;
margin-left:20px;
  
`;

const Subhead =styled.p`
  color: #52A1C3;
  font-family: 'Saira Semi Condensed', sans-serif;
  margin-bottom:20px;
  margin-top:5px;
  margin-left:20px;
`;

const J_Head =({
  title="",
  subhead="",
})=> {
    return (
    <Cont></Cont>
      <Title>{title}</Title>
      <Subhead>{subhead}</Subhead>
        </div>
    )
      
}  
export default J_Head;
