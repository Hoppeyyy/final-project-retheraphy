import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const CardCont = styled.div`
  width:375px;
  height:150px;
  text-align:center;
  display:flex;
  flexDirection:column;
  `;
  

const UpperBox = styled.div`
  background-color:#CDF0EE;
  height:60px;
  `;
  
const heading = styled.h3`
  margin-top:0px;
  justify-content:center;
  margin-bottom:5px;
  margin-top:5px;
  color:#52A1C3;
  font-family:Saira Semi Condensed', sans-serif;
  text-align:center;

`;
const LowerBox = styled.div`
  background-color:#FFFFFF;
  height:60px;
  flex-grow:1;
`;

const text = () => ({
  marginTop:0,
  justifyContent:"center",
  marginBottom:5,
  marginTop:5,
  color:"#52A1C3",
  fontFamily: "Saira Semi Condensed', sans-serif",
  textAlign:"center",

})



// number need to find the way to change the text {number}
function ContentUI() {
  return (
  <div style={container()}>
   <div style={UpperBox()}>
    <h3 style={heading()}>1:Anxiety disorder</h3>
   </div>

   <div style={LowerBox()}>
    <p style={text()}>Symptoms can include excessive worrying, feeling agitated, restlessness, fatigue, tense muscles, difficulty sleeping, and panic attacks.</p>
   </div>

  </div>
  )
}


export default ContentUI;