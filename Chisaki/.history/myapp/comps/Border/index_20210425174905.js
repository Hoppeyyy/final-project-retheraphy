
import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const borderStyle = styled.div`
    height:500px;
    width:375px;
    border:"#82DED9 solid 2px",
    overflow:"auto",
    `;


const bpStyle = () => ({
overflow: "scroll",
scrollbarColor: "#82DED9 #F4F0F0",
color: "#52A1C3",
fontfamily: 'Roboto, sans-serif',
textAlign:"left",
textIndent: "20px",
fontSize: "16px",
width: "370px",

})

function BorderUI(){
    return (
        <div className={styles.title}
        style={borderStyle()}>
        <p className={styles.title}
        style={bpStyle()}> 
        Psychological tests are formalized measures of mental functioning. Most are objective and quantifiable; 
        however, certain projective tests may involve some level of subjective interpretation. Also known as inventories, measurements, questionnaires, and scales, psychological tests are administered in a variety of settings, including preschools, primary and secondary schools, colleges and universities, hospitals, outpatient healthcare settings, and social agencies. 
        They come in a variety of formats, including written, verbal, and computer administered.
        
        
        </p>
        </div>
      )
}  
export default BorderUI;