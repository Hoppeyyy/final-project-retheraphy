const cont = () => ({
  display:'flex',
  justifyContent:'space-between'

})

const title = () => ({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  fontSize: '30px',
  lineHeight: '47px',
  color: '#52A1C3',
})
const subheading = () => ({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  fontSize: '30px',
  lineHeight: '47px',
  color: '#52A1C3',
  textAlign: 'center',
})
const indent = () => ({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  fontSize: '18px',
  lineHeight: '28px',
  color: '#52A1C3',
  textAlign: 'center',
})
const picture = () => ({
  width: 175,
  height: 111,
})

function ResultUI() {
  return (
    <div>
    <div style={cont()}>
      <h3 style={title()}>Result</h3>
      <img src="/apps_pic/img_result.png" style={picture()}/>
      </div>
      <h3 style={subheading()}>Base on the score you got from the test</h3>
      <p style={indent()}>You may experiencing severe mental illness</p>
    </div>
  )
}

export default ResultUI;