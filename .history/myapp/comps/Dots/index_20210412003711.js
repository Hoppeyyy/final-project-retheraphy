import styles from '../../styles/Home.module.css'

const container = () => ({
  backgroundColor:"#82DED9",
  width:200,
  height:30,
  alignItems:"center",
  margin:10,
  justifyContent:"center",
})

const dots = () => ({
  margin:0,
  justifyContent:"center",
  marginBottom:5,
  marginTop:5,
  width

})

function DotsUI() {
  return (
    <div style={container()}>
      <div style={dots()}></div>
      <div style={dots()}></div>
      <div style={dots()}></div>
      <div style={dots()}></div>
      <div style={dots()}></div>
      <div style={dots()}></div>
    </div>
  )
}
export default DotsUI;