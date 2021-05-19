const cont = () => ({
  display:'flex',
  justifyContent:'space-between',

})

const title = () => ({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  fontSize: '30px',
  lineHeight: '47px',
  color: '#52A1C3',
  marginLeft: '20px',
})
const subheading = () => ({
  fontFamily: 'Roboto, sans-serif',
  color: '#52A1C3',
  textAlign: 'center',
  fontWeight:"regular",
  lineHeight:"25px",
  marginLeft: '20px',
})
const indent = () => ({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '28px',
  color: '#52A1C3',
  textAlign: 'center',
  marginTop:0,
})
const picture = () => ({
  width: 175,
  height: 111,
})

function ResultUI() {
  return (
    <div>
    <div style={cont()}>
      <h3 style={title()}>Your Result</h3>
      <img src="/apps_pic/img_result.png" style={picture()}/>
      </div>
      <p style={subheading()}>Thank you for taking time for the test! Base on the answers from the tr mental condition toward the below three mental illnesses
      :</p>
      {/* <p style={indent()}>The severity of mental illness</p> */}
    </div>
  )
}

export default ResultUI;