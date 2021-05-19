import HomeUI from '../comps/Home/index2'
import ButtonUI from '../comps/Button/index2'
import styles from '../styles/Home.module.css'


export default function Home() {
    return (
       <div>
          <HomeUI />
          <div className={styles.buttonBox}>
    <ButtonUI 
    title="Start"
    subtext=""
    routeTo='/intro'
    bgcolor="#52A1C3"
    />
    </div>
       </div>
    )
  }