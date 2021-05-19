import HomeUI from '../comps/Home/index2'
import ButtonUI from '../comps/Button'


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
    style={{
      position:"absolute",
      top:100,
    }}
    />
    </div>
       </div>
    )
  }