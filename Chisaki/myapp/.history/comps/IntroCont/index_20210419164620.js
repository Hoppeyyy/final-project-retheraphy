import styles from '../../styles/Home.module.css'

const contentStyle = () => ({
    color: "#52A1C3",
    fontfamily: 'Roboto, sans-serif',
    textAlign:"left",
    textIndent: "20px",
    fontSize: "18px",
    width: "375px",
})

const pStyle = () => ({
    margin:"5px",
})

function IntroContUI(){
    return (
        <div className={styles.title}
        style={contentStyle()}>
          <p className={styles.title} style={pStyle()}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.  Fusce nec tellus sed augue semper porta. Mauris massa. 
            
          </p>
        </div>
      )
}  
export default IntroContUI;