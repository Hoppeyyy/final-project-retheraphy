import styled  from  'styled-components'
import styles from '../../styles/Home.module.css'
import ButtonUI from '../Button/index2'

const HomeCont = styled.div`
.body{
    background-color:#82DED9;
    width:375px;
    height:600px;
}
// .circle{
//     background: lightblue;
//     border-radius: 50%;
//     width: 100px;
//     height: 100px;
// }
`;

function HomeUI() {
    return <HomeCont >
       <div className="body">
        <img src="/image/logo_bg.png" 
        style={{
          width:250,
          height:90,
          marginLeft:"15%",
          marginTop:"50%"
        }}/>
      <div className={styles}
      <ButtonUI 
      title="Start"
      subtext=""
      routeTo='/intro'
      />
      </div>
      </HomeCont>
    
  }
  export default HomeUI;
