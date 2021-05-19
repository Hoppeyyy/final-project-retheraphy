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

function DotsUI() {
  return (
    <div>
      <h4 className={styles.title}
      style={titleStyle()}>Title</h4>
      <p className={styles.title}
      style={titleStyle()}>Subtext</p>
    </div>
  )
}
export default DotsUI;