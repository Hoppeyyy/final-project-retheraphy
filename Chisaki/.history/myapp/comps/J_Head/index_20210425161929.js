import styles from '../../styles/Home.module.css';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: #52A1C3;
 font-family: 'Saira Semi Condensed', sans-serif;
  textAlign: left;
  padding: 10px;
`;

const Subhead =styled.h3`
  olor: #52A1C3;
  font-family: 'Saira Semi Condensed', sans-serif;
  lineHeight: 0.5;
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
