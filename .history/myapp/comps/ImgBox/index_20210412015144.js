import styles from '../../styles/Home.module.css'


const container = () => ({
  width:375,
  height:30,
  alignItems:"center",
  textAlign:"center",
  

})

const text = () => ({
  margin:0,
  justifyContent:"center",
  marginBottom:5,
  marginTop:5,
  color:"#52A1C3",
  fontFamily: "Saira Semi Condensed', sans-serif",
  textAlign:"center",
 


})


// number need to find the way to change the text {number}
function ImgBoxUI() {
  return (
    <div style={container()}>
      <img src="http"
    </div>
  )
}


export default ImgBoxUI;