import styles from '../../styles/Home.module.css'

const container = () => ({
 width:375,
 display:"flex",
 flexDirection:"column",
 backgroundColor:"#DDDCDC",
})

const tabsContainer = () => ({
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  
  

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
  margin:0,
  

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
          <h4>Depression disorder</h4>
        </div>

      </div>

      <div style={resultBox()}>
        <div style={sliderBox()}>
          <input></input>
        </div>
        <div style={textBox()}>
          <p>Mild(11-25)</p>
          <p>Moderate(26-50)</p>
          <p>Severe(51-100)</p>
        </div>
      </div>
    </div>
  )
}
export default FolderUI;