import styles from '../../styles/Home.module.css'
import React from 'react';
import styled from 'styled-components';

const Cont= styled.div`
`;
const PsStyle = styled.p`
    color:#52A1C3;
    font-family: 'Saira Semi Condensed', sans-serif;
    text-align:left;
    font-size:12px;
    width:80%;
    margin-left:20px;
    `;

const PsNoteUI = ({

})=>{
    return (
        <Cont>
        
          <PsStyle>
                
                Result does not represent a real medical diagnosis.</PsStyle>

          </Cont>
        
      )
}  
export default PsNoteUI;
