import styles from '../../styles/Home.module.css'



const titleStyle = () => ({
  margin:0,
  marginBottom:5,
  marginTop:5,
  color:"#52A1C3",

})

function QuestionUI() {
  return (
    < div className={styles.questionbox}>
      <img src="https:placekitten.com/50/50" 
      style={{
        width:30,
        height:30,
      }}/>
      <h4 className={styles.title}
      style={titleStyle()}>Title</h4>
      <p className={styles.title}
      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  )
}
export default QuestionUI;