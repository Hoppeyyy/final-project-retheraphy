import styles from '../../styles/Home.module.css'

const container = () => ({
  width:200,
  height:30,
  alignItems:"center",
  margin:10,
  display:"flex",
  flexDirection:"row",

})

const dots = () => ({
  margin:0,
  justifyContent:"center",
  marginBottom:5,
  marginTop:5,
  width:40,
  height:20,
  margin:5,
  borderRadius:10,
  backgroundColor:"#C4C4C4",
  color:"#FFFFFF",
  fontFamily: 'Roboto, sans-serif',
  textAlign:"center",
 


})

function NumberUI() {
  return (
    <div style={container()}>
      <div style={dots()}>1</div>
      <div style={dots()}>2</div>
      <div style={dots()}>3</div>
      <div style={dots()}>4</div>
      <div style={dots()}>5</div>
      <div style={dots()}>6</div>
    </div>
  )
}
export default NumberUI;