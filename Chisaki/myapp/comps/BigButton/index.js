import styles from '../../styles/Home.module.css'

const BoxStyle = () => ({
  backgroundColor:"#DADADA",
  width:110,
  height:70,
  borderRadius:10,
  display:"flex",
  flexDirection:"column",
  textAlign:"center",
  justifyContent:"center",
  color:"#FFFFFF",
  fontFamily: 'Roboto, sans-serif',
  margin:10,
})

const titleStyle = () => ({
  margin:0,
  marginBottom:5,
  marginTop:5,
  

})

function BigButtonUI() {
  return (
    <div className={styles.main}
    style={BoxStyle()}>
      <h3 className={styles.title}
      style={titleStyle()}>Title</h3>
      
    </div>
  )
}
export default BigButtonUI;