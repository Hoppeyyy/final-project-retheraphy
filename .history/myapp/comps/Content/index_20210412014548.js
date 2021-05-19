import styles from '../../styles/Home.module.css'


const container = () => ({
  width:375,
  height:150,
  textAlign:"center",
  display:"flex",
  flexDirection:"column",
  border:"5px solid #000000",

})
const UpperBox = () => ({
  backgroundColor:"#CDF0EE",
  height:60,
  
  

})
const heading = () => ({
  marginTop:0,
  justifyContent:"center",
  marginBottom:5,
  marginTop:5,
  color:"#52A1C3",
  fontFamily: "Saira Semi Condensed', sans-serif",
  textAlign:"center",

})
const LowerBox = () => ({
  backgroundColor:"#FFFFFF",
  height:60,
  flexGrow:1,
})

const text = () => ({

  
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