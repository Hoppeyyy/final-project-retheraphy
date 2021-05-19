import styles from '../../styles/Home.module.css'

const container = () => ({
 width:375,
 height:200,
 display:"flex",
 flexDirection:"column",
 backgroundColor:"#DDDCDC",
 
})

const tabsContainer = () => ({
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
 
  
  

})

const tabs = () => ({
  height:30,
  fontSize:12,
  color:F3F3F3,
  flexGrow:1,
  textAlign:"center",
  justifyContent:"center",
  alignItems:"center",
  border:"1px solid #000000",
  
  
  

})

const title = () => ({
  marginTop:5,
  

})

const resultBox = () => ({
  display:"flex",
  flexDirection:"column",
  flexGrow:5,
  

})

const sliderBox = () => ({
  margin:0,
  

})
const textBox = () => ({
  display:"flex",
  flexDirection:"row",
  flexGrow:1,
  

})
const text = () => ({
  display:"flex",
  flexDirection:"row",
  margin:10,
  

})

function FolderUI() {
  return (
    <div style={container()}>

      <div style={tabsContainer()}>

        <div style={tabs()}>
          <h4 style={title()}>Anxiety disorder</h4>
        </div>
        <div style={tabs()}>
          <h4 style={title()}>Bipolar disorder</h4>
        </div>
        <div style={tabs()}>
          <h4 style={title()}>Depression disorder</h4>
        </div>

      </div>

      <div style={resultBox()}>
        <div style={sliderBox()}>
          <input></input>
        </div>
        <div style={textBox()}>
          <p style={text()}>Mild(11-25)</p>
          <p style={text()}>Moderate(26-50)</p>
          <p style={text()}>Severe(51-100)</p>
        </div>
      </div>
    </div>
  )
}
export default FolderUI;