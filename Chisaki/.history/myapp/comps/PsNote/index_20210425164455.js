import styles from '../../styles/Home.module.css'
import React from 'react';
import styled from 'styled-components';

const Cont= styled.div`
`;
const PsStyle = styled.p`
    color: "#52A1C3;
    fontfamily: 'Roboto, sans-serif',
    textAlign:"left",
    display:"inline" ,
    margin:"0",
    `;

const email = () => ({
    fontWeight: "blod",
   // a:hoverBackgroundColor: "yellow";
      
})
function PsNoteUI(){
    return (
        <div className={styles.title} style={PsStyle()}>
          <h6>
              Please feel free to contact 
              <a href="mailto:retheraph.more@retheraph.com"> retheraph.more@retheraph.com </a>for any inquiries 
          </h6>
          </div>
        
      )
}  
export default PsNoteUI;
