import styles from '../../styles/Home.module.css'


const container = () => ({
  width:375,
  height:100,
  textAlign:"center",
  display:"flex",
  flexDirection:"column",
  backgroundColor:"",

})
const UpperBox = () => ({
  backgroundColor:"#CDF0EE",
  height:60,
  flexGrow:1,
  

})
const LowerBox = () => ({
  backgroundColor:"#FFFFFF",
  height:60,
  flexGrow:1,
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
function ContentUI() {
  return (
  <div style={container()}>
   <div style={UpperBox()}>
    <h3 style={text()}>1:Anxiety disorder</h3>
   </div>
   <div style={LowerBox()}>
    <p>Symptoms can include excessive worrying, feeling agitated, restlessness, fatigue, tense muscles, difficulty sleeping, and panic attacks.</p>
   </div>
  </div>
  )
}


export default ContentUI;