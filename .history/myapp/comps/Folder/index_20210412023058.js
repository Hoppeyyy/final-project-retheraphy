import styles from '../../styles/Home.module.css'

const container = () => ({
 width:375,
 display:"flex",
 flexDirection:"column",
 backgroundColor:"#DDDCDC",
 justifyContent:"center",
 alignItems:"center",
})

const tabsContainer = () => ({
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  margin:10,
  
  

})

const tabs = () => ({
  display:"flex",
  flexDirection:"row",
  
  

})

const title = () => ({
  margin:0,
  

})

const resultBox = () => ({
  display:"flex",
  flexDirection:"column",
  

})

const sliderBox = () => ({
  margin:0,
  

})
const textBox = () => ({
  display:"flex",
  flexDirection:"row",
  

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