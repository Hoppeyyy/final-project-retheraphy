import styles from '../../styles/Home.module.css'

const container = () => ({
 width:375,
 display:"flex",
 flexDirection:"column",
 backgroundColor:"#DDDCDC",
})

const tabs_container = () => ({
  display:"flex",
  fle
  
  

})

const tabs = () => ({
  margin:0,
  
  

})

const title = () => ({
  margin:0,
  

})

const result_box = () => ({
  margin:0,
  

})
const slider_box = () => ({
  margin:0,
  

})
const text_box = () => ({
  margin:0,
  

})

function FolderUI() {
  return (
    <div style={container()}>

      <div style={tabs_container()}>

        <div style={tabs()}>
          <h4 style={title()}>Anxiety disorder</h4>
        </div>
        <div style={tabs()}>
          <h4 style={title()}>Bipolar disorder</h4>
        </div>
        <div style={tabs()}>
          <h4> style={title()}Depression disorder</h4>
        </div>

      </div>

      <div style={result_box()}>
        <div style={slider_box()}>
          <input></input>
        </div>
        <div style={text_box()}>
          <p>Mild(11-25)</p>
          <p>Moderate(26-50)</p>
          <p>Severe(51-100)</p>
        </div>
      </div>
    </div>
  )
}
export default FolderUI;