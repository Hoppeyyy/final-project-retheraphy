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
  marginBottom:10,
  marginTop:10,
  color:"#52A1C3",
  fontFamily: "Saira Semi Condensed', sans-serif",
  textAlign:"center",
 


})


// number need to find the way to change the text {number}
function HeadingUI() {
  return (
    <div style={container()}>
   <h2 style={text()}>Top 3 Mental Illness In US</h2>
    </div>
  )
}


export default HeadingUI;