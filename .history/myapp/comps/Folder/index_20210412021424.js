import styles from '../../styles/Home.module.css'

const container = () => ({
 width:375,
 display:"flex",
 flexDirection:
})

const tabs_container = () => ({
  
  
  

})

const tabs = () => ({
  
  
  

})

const title = () => ({
  
  

})

const result_box = () => ({
  
  

})
const slider_box = () => ({
  
  

})
const text_box = () => ({
  
  

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