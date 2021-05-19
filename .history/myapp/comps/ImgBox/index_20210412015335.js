import styles from '../../styles/Home.module.css'


const container = () => ({
  width:375,
  height:30,
  
  

})

const img = () => ({
  margin:0,
  width:
 
 


})


// number need to find the way to change the text {number}
function ImgBoxUI() {
  return (
    <div style={container()}>
      <img src="http://placekitten.com/50/50" style={img()}/>
    </div>
  )
}


export default ImgBoxUI;