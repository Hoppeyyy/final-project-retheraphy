import styles from '../../styles/Home.module.css'

const contian = () => ({
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

const titleStyle = () => ({
  margin:0,
  justifyContent:"center",
  marginBottom:5,
  marginTop:5,
  

})

function FolderUI() {
  return (
    <div style={styles.container}>
    <div style={tabs_container}>

    </div>
    </div>
  )
}
export default FolderUI;