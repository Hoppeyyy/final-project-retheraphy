import styles from '../../styles/Home.module.css';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
color: #52A1C3;
font-family: 'Saira Semi Condensed', sans-serif;
text-align: left;
margin:0;
  
`;

const Subhead =styled.p`
  color: #52A1C3;
  font-family: 'Saira Semi Condensed', sans-serif;
  margin-bottom:20px;
`;

const J_Head =({
  title="",
  subhead="",
})=> {
    return (
    <div>
      <Title>{title}</Title>
      <Subhead>{subhead}</Subhead>
        </div>
    )
      
}  
export default J_Head;
