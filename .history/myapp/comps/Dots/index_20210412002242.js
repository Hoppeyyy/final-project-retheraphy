import styles from '../../styles/Home.module.css'

const container = () => ({
  backgroundColor:"#82DED9",
  width:200,
  height:30,
 
  
  
  fontFamily: 'Roboto, sans-serif',
  margin:10,
  justifyContent:"center",
})

const titleStyle = () => ({
  margin:0,
  justifyContent:"center",
  marginBottom:5,
  marginTop:5,
  

})

function DotsUI() {
  return (
    <div style={container()}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
export default DotsUI;