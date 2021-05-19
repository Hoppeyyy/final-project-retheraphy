import styles from '../../styles/Home.module.css'
import React from "react";
import ReactDOM from "react-dom";

const container = () => ({
  width:200,
  height:30,
  alignItems:"center",
  margin:10,
  textAlign:"center",

})

const text = () => ({
  margin:0,
  justifyContent:"center",
  marginBottom:5,
  marginTop:5,
  color:"#52A1C3",
  fontFamily: 'Roboto, sans-serif',
  textAlign:"center",
 


})

function App()
{
  return< NumberUI number="1/6" />;
}

function NumberUI() {
  return (
    <div style={container()}>
    <p style={text()}></p>
    </div>
  )
}


export default NumberUI;