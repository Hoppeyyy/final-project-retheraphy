import styles from '../../styles/Home.module.css'

const BoxStyle = () => ({
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
    <div className={styles.main}
    
    </div>
  )
}
export default FolderUI;