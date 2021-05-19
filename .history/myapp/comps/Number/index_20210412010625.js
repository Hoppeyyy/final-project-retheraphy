import styles from '../../styles/Home.module.css'


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



function NumberUI() {
  return (
    <div style={container()}>
    <p style={text()}>1/6</p> /*s */
    </div>
  )
}


export default NumberUI;