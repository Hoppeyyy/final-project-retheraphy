import styles from '../../styles/Home.module.css'
import React from 'react';
import styled from 'styled-components';

const Cont= styled.div`
`;
const PsStyle = styled.p`
    color:#52A1C3;
    font-family: 'Saira Semi Condensed', sans-serif;
    text-align:left;
    font-size:16px;
    width:377px;
    `;

const Email = styled.p`
font-weight:bold;
`;
    
   // a:hoverBackgroundColor: "yellow";
      
const PsNoteUI = ({

})=>{
    return (
        <Cont>
          <PsStyle>
              Please feel free to contact 
            <Email></Email> for any inquiries 
          </PsStyle>
          </Cont>
        
      )
}  
export default PsNoteUI;
