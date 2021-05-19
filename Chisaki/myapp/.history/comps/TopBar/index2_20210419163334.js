import styles from '../../styles/Home.module.css'



function TopBar() {
    return (
      < div className={styles.topBar}>
        <img src="/image/home.png" 
        style={{
          width:35,
          height:35,
          textAlign:"left",
          marginLeft:
          
        }}/>
        <img src="/image/logo_bg.png"
        style={{
          width:200,
          height:50,
          marginLeft:"40px",
        }}/>
      </div>
    )
  }
  export default TopBar;