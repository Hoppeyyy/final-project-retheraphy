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
  width:30,
  height:15,
  margin:10,
  borderRadius:10,
  backgroundColor:"#C4C4C4",
 


})

function DotsUI() {
  return (
    <div style={container()}>
      <div style={dots()}>1</div>
      <div style={dots()}>2</div>
      <div style={dots()}>3</div>
      <div style={dots()}></div>
      <div style={dots()}></div>
      <div style={dots()}></div>
    </div>
  )
}
export default DotsUI;