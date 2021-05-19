import styled  from  'styled-components'
import ButtonUI from ''

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
      </div>
      </HomeCont>
    
  }
  export default HomeUI;
