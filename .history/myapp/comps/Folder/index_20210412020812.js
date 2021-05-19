import styles from '../../styles/Home.module.css'

const container = () => ({
  backgroundColor:"#82DED9",
  width:100,
  height:50,
  borderRadius:10,
  display:"flex",
  flexDirection:"column",
  textAlign:"center",
  color:"#FFFFFF",
  fontFamily: 'Roboto, sans-serif',
  margin:10,
  justifyContent:"center",
})

const tabs_container = () => ({
  
  
  

})

const tabs = () => ({
  
  
  

})

const title = () => ({
  
  

})

const title = () => ({
  
  

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

      </div>
    </div>
  )
}
export default FolderUI;