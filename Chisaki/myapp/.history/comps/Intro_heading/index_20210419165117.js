import styles from '../../styles/Home.module.css'

const headingStyle = () => ({
    color: "#52A1C3",
    fontfamily: 'Roboto, sans-serif',
    textAlign:"left",
    padding:"10px",
})

const subHeadstyle = () => ({
    lineHeight: "0.5",
    marginBottom:"20px",
})

function IntroUI(){
    return (
        <div className={styles.title}
        style={headingStyle()}>
          <h1 className={styles.title} style={subHeadstyle()}>Heading</h1>
          <h3 className={styles.title} style={subHeadstyle()}>Sub-heading</h3>
        </div>
      )
}  
export default HeadingUI;